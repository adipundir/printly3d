/**
 * Printly — an A2MCP ASP that turns a text prompt into a printable STL.
 *
 * Flow: POST /v1/model with {prompt}. Unpaid -> HTTP 402 with an x402 PAYMENT-REQUIRED
 * challenge. Paid (x402 payment header present) -> generate the model and return a viewer
 * URL + STL URL + a print-cost estimate. The service is stateless: the model is fully
 * determined by the spec, which is encoded into the URLs and regenerated on demand.
 */
import { Hono } from "hono";
import { generateModel, type ModelSpec } from "../stl/generate.js";
import { generateFromRecipe } from "../stl/dsl.js";
import { estimatePrint } from "../stl/estimate.js";
import { parsePrompt } from "../stl/spec.js";
import { promptToRecipe, hasOpenRouter } from "../ai/openrouter.js";
import { encodeSpec, decodeSpec, encodeRecipe, decodeRecipe } from "./spec-codec.js";
import { viewerPage } from "./viewer.js";
import { XLAYER, PRICE_ATOMIC, PAY_TO, PUBLIC_BASE_URL } from "../stl/config.js";
import { encodeChallenge, type PaymentRequired } from "../x402/types.js";

export const app = new Hono();

function baseUrl(c: any): string {
  if (PUBLIC_BASE_URL) return PUBLIC_BASE_URL.replace(/\/$/, "");
  const url = new URL(c.req.url);
  return `${url.protocol}//${url.host}`;
}

function challenge(resourceUrl: string): PaymentRequired {
  return {
    x402Version: 2,
    resource: { url: resourceUrl, description: "Generate one printable STL model", mimeType: "application/json" },
    accepts: [
      {
        scheme: "exact",
        network: XLAYER.network,
        asset: XLAYER.asset,
        amount: PRICE_ATOMIC,
        decimals: 6,
        payTo: PAY_TO,
        maxTimeoutSeconds: 300,
        extra: { name: XLAYER.domainName, version: XLAYER.domainVersion, assetTransferMethod: "eip3009" },
      },
    ],
  };
}

/** x402 payment header, if the caller attached one (accepts common header spellings). */
function paymentHeader(c: any): string | undefined {
  return (
    c.req.header("x-payment") ??
    c.req.header("payment-signature") ??
    c.req.header("x-payment-signature") ??
    undefined
  );
}

app.get("/health", (c) => c.json({ ok: true, service: "printly" }));

app.get("/", (c) =>
  c.json({
    service: "Printly",
    what: "Prompt -> printable STL, with a 3D preview page and print-cost estimate.",
    call: "POST /v1/model  body {\"prompt\":\"a keychain that says ADITYA\"}",
    shapes: ["keychain", "nameplate", "coin"],
    payment: `x402 exact / USDT0 on ${XLAYER.network}, ${Number(PRICE_ATOMIC) / 1e6} USDT0 per model`,
  })
);

// A GET probe (used by many x402 validators, incl. `payment quote`) always returns the
// challenge so the endpoint's pricing is discoverable without a POST body.
app.get("/v1/model", (c) => {
  const pr = challenge(`${baseUrl(c)}/v1/model`);
  c.header("PAYMENT-REQUIRED", encodeChallenge(pr));
  return c.json(pr, 402);
});

app.post("/v1/model", async (c) => {
  const resourceUrl = `${baseUrl(c)}/v1/model`;

  // Unpaid -> 402 challenge (header carries the base64 challenge; body too, for clients that read either).
  if (!paymentHeader(c)) {
    const pr = challenge(resourceUrl);
    c.header("PAYMENT-REQUIRED", encodeChallenge(pr));
    return c.json(pr, 402);
  }

  // Paid (or an OKX Sampling Call): parse prompt, build model, return result. We never gate
  // delivery on confirmed on-chain settlement — an OKX Sampling Call arrives with a payment
  // header but reports settlement as absent, and must still be served (User Agreement §7.7).
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

// Raw STL bytes, regenerated on demand. ?dl=1 forces a download filename.
app.get("/stl", (c) => {
  let built;
  try {
    built = modelFromQuery(c);
  } catch (e: any) {
    return c.text(`bad or missing model reference: ${e?.message ?? e}`, 400);
  }
  const { model, fname } = built;
  c.header("Content-Type", "model/stl");
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
    return c.text(`bad or missing model reference: ${e?.message ?? e}`, 400);
  }
  const { model, title, subtitle } = built;
  const stlQuery = c.req.query("r") ? `r=${c.req.query("r")}` : `s=${c.req.query("s")}`;
  const html = viewerPage({ title, subtitle, stlQuery, dims: model.bbox, estimate: estimatePrint(model.volumeMm3) });
  return c.html(html);
});
