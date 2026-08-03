/**
 * Printly — an A2MCP ASP that turns a text prompt into a printable STL.
 *
 * Flow: POST /v1/model with {prompt}. The official OKX Payment SDK gates the route: unpaid
 * callers get an HTTP 402 with a `PAYMENT-REQUIRED` challenge, and a caller who attaches a
 * `PAYMENT-SIGNATURE` is verified and settled through the OKX facilitator before the handler
 * ever runs (see `src/x402/payment.ts`). We generate the model and return a viewer URL + STL
 * URL + a print-cost estimate. The service is stateless: the model is fully determined by the
 * spec, which is encoded into the URLs and regenerated on demand.
 */
import { Hono, type MiddlewareHandler } from "hono";
import { generateModel, type ModelSpec } from "../stl/generate.js";
import { generateFromRecipe } from "../stl/dsl.js";
import { estimatePrint } from "../stl/estimate.js";
import { parsePrompt } from "../stl/spec.js";
import { promptToRecipe, hasOpenRouter } from "../ai/openrouter.js";
import { encodeSpec, decodeSpec, encodeRecipe, decodeRecipe } from "./spec-codec.js";
import { viewerPage } from "./viewer.js";
import { MODEL_PRICE_USD, PUBLIC_BASE_URL, X402_NETWORK } from "../stl/config.js";
import { createPaymentMiddleware, paymentsMisconfiguration } from "../x402/payment.js";

/**
 * /m and /stl are free and their output is a pure function of the query, so the CDN can serve
 * every repeat without touching the function. That is both a cost saving and the main defence
 * against someone replaying the same heavy model reference: they get a cache hit, we get one
 * generation. Failures are cached briefly too, so a flood of bad references can't be used to
 * hammer the origin either.
 */
const CACHE_MODEL = "public, max-age=3600, s-maxage=31536000, immutable";
const CACHE_ERROR = "public, max-age=60, s-maxage=300";

function baseUrl(c: any): string {
  if (PUBLIC_BASE_URL) return PUBLIC_BASE_URL.replace(/\/$/, "");
  const url = new URL(c.req.url);
  return `${url.protocol}//${url.host}`;
}

/** Regenerate a model from a URL query — either an AI recipe (?r=) or a template spec (?s=). */
function modelFromQuery(c: any): { model: ReturnType<typeof generateModel>; title: string; subtitle: string; fname: string } {
  const r = c.req.query("r");
  const s = c.req.query("s");
  if (r) {
    const recipe = decodeRecipe(r);
    const model = generateFromRecipe(recipe);
    const name = recipe.name || "model";
    return { model, title: name, subtitle: `${recipe.parts.length} parts`, fname: name.replace(/[^a-z0-9]+/gi, "_").toLowerCase() || "model" };
  }
  if (s) {
    const spec = decodeSpec(s);
    const model = generateModel(spec);
    return { model, title: spec.text, subtitle: spec.shape, fname: `${spec.shape}-${spec.text}`.replace(/[^a-z0-9]+/gi, "_").toLowerCase() || "model" };
  }
  throw new Error("missing model reference");
}

/**
 * Build the service. `payment` is the x402 gate that sits in front of /v1/model — production
 * passes the OKX Payment SDK middleware; tests pass the same middleware wired to a stub
 * facilitator so the gate itself is under test.
 */
export function createApp(payment: MiddlewareHandler | null): Hono {
  const app = new Hono();

  // The gate is mounted ahead of the routes it protects and only ever touches /v1/model. With
  // no credentials the paid route is closed rather than given away: no key, no verified
  // payments, no service.
  if (payment) {
    app.use("*", payment);
  } else {
    app.all("/v1/model", (c) =>
      c.json(
        { ok: false, error: "payment service unavailable", detail: paymentsMisconfiguration() },
        503
      )
    );
  }

  app.get("/health", (c) =>
    c.json({ ok: true, service: "printly", payments: payment ? "okx-sdk" : "unconfigured" })
  );

  app.get("/", (c) =>
    c.json({
      service: "Printly",
      what: "Prompt -> printable STL, with a 3D preview page and print-cost estimate.",
      call: "POST /v1/model  body {\"prompt\":\"a keychain that says ADITYA\"}",
      shapes: ["keychain", "nameplate", "coin"],
      payment: `x402 exact / USD₮0 on ${X402_NETWORK}, ${MODEL_PRICE_USD} per model, verified and settled through the OKX facilitator`,
    })
  );

  // A GET probe (used by x402 validators, incl. `onchainos agent x402-check`) hits the same
  // paid route, so the SDK answers it with the same 402 challenge and the price is
  // discoverable without a POST body. A paid GET gets the service description.
  app.get("/v1/model", (c) =>
    c.json({
      ok: true,
      service: "Printly",
      call: "POST /v1/model  body {\"prompt\":\"a keychain that says ADITYA\"}",
      shapes: ["keychain", "nameplate", "coin"],
    })
  );

  app.post("/v1/model", async (c) => {
    // Payment is verified by the time we get here; settlement runs after we respond, and only
    // if this handler succeeds — a failed generation is never charged for.
    let body: any = {};
    try {
      body = await c.req.json();
    } catch {
      /* allow empty body */
    }
    const prompt = typeof body?.prompt === "string" ? body.prompt : "";
    if (!prompt.trim()) return c.json({ ok: false, error: "missing 'prompt'" }, 400);

    const base = baseUrl(c);

    // Primary path: the LLM designs the object as a build-recipe, which we turn into a solid.
    if (hasOpenRouter()) {
      try {
        const { recipe, model: modelName } = await promptToRecipe(prompt);
        const built = generateFromRecipe(recipe);
        const query = `r=${encodeRecipe(recipe)}`;
        return c.json({
          ok: true,
          source: "ai",
          model: modelName,
          prompt,
          name: recipe.name ?? prompt,
          parts: recipe.parts.length,
          dimensionsMm: built.bbox,
          volumeMm3: Math.round(built.volumeMm3),
          printEstimate: estimatePrint(built.volumeMm3),
          viewerUrl: `${base}/m?${query}`,
          stlUrl: `${base}/stl?${query}`,
        });
      } catch (e: any) {
        // fall through to the deterministic template generator below
        console.error("[printly] AI path failed, falling back to templates:", e?.message ?? e);
      }
    }

    // Fallback path: deterministic keyword templates (keychain / nameplate / coin).
    let spec: ModelSpec & { note?: string };
    let model: ReturnType<typeof generateModel>;
    try {
      spec = parsePrompt(prompt);
      model = generateModel(spec);
    } catch (e: any) {
      return c.json({ ok: false, error: `could not build model: ${e?.message ?? e}` }, 422);
    }
    const encoded = encodeSpec(spec);
    return c.json({
      ok: true,
      source: "template",
      prompt,
      understood: (spec as any).note,
      spec: { shape: spec.shape, text: spec.text },
      dimensionsMm: model.bbox,
      volumeMm3: Math.round(model.volumeMm3),
      printEstimate: estimatePrint(model.volumeMm3),
      viewerUrl: `${base}/m?s=${encoded}`,
      stlUrl: `${base}/stl?s=${encoded}`,
    });
  });

  // Raw STL bytes, regenerated on demand. ?dl=1 forces a download filename.
  app.get("/stl", (c) => {
    let built;
    try {
      built = modelFromQuery(c);
    } catch (e: any) {
      c.header("Cache-Control", CACHE_ERROR);
      return c.text(`bad or missing model reference: ${e?.message ?? e}`, 400);
    }
    const { model, fname } = built;
    c.header("Content-Type", "model/stl");
    c.header("Cache-Control", CACHE_MODEL);
    if (c.req.query("dl")) c.header("Content-Disposition", `attachment; filename="${fname}.stl"`);
    const ab = model.stl.buffer.slice(model.stl.byteOffset, model.stl.byteOffset + model.stl.byteLength);
    return c.body(ab as ArrayBuffer);
  });

  // 3D viewer page, regenerated on demand.
  app.get("/m", (c) => {
    let built;
    try {
      built = modelFromQuery(c);
    } catch (e: any) {
      c.header("Cache-Control", CACHE_ERROR);
      return c.text(`bad or missing model reference: ${e?.message ?? e}`, 400);
    }
    const { model, title, subtitle } = built;
    const stlQuery = c.req.query("r") ? `r=${c.req.query("r")}` : `s=${c.req.query("s")}`;
    const html = viewerPage({ title, subtitle, stlQuery, dims: model.bbox, estimate: estimatePrint(model.volumeMm3) });
    c.header("Cache-Control", CACHE_MODEL);
    return c.html(html);
  });

  return app;
}

/** The live service. */
export const app = createApp(createPaymentMiddleware());
