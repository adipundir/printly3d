/**
 * Payment-gate tests. These drive the real OKX Payment SDK middleware
 * (`@okxweb3/app-x402-hono`) in front of the real Printly routes, with a stub facilitator
 * standing in for OKX's — so the whole challenge -> verify -> serve -> settle path is
 * exercised offline.
 *
 * The property that matters: the model handler must not run unless the facilitator says the
 * payment is valid.
 */
import { describe, it, expect, beforeAll } from "vitest";
import type { Hono } from "hono";

const PAY_TO = "0x1111111111111111111111111111111111111111";
const USDT0 = "0x779ded0c9e1022225f8e0630b35a9b54be713736";
const PAYER = "0x2222222222222222222222222222222222222222";

let createApp: typeof import("../src/server/app.js")["createApp"];
let buildResourceServer: typeof import("../src/x402/payment.js")["buildResourceServer"];
let x402Middleware: typeof import("../src/x402/payment.js")["x402Middleware"];

beforeAll(async () => {
  // Config is read at import time, so set it before the modules load.
  process.env.PAY_TO = PAY_TO;
  process.env.MODEL_PRICE_USD = "0.05";
  process.env.X402_NETWORK = "eip155:196";
  delete process.env.OPENROUTER_API_KEY; // keep generation on the deterministic template path
  ({ createApp } = await import("../src/server/app.js"));
  ({ buildResourceServer, x402Middleware } = await import("../src/x402/payment.js"));
});

/** Stands in for the OKX facilitator: same interface, no network, and it counts its calls. */
function stubFacilitator(opts: { valid: boolean; settles?: boolean }) {
  const calls = { supported: 0, verify: 0, settle: 0 };
  return {
    calls,
    async getSupported() {
      calls.supported++;
      return {
        kinds: [{ x402Version: 2, scheme: "exact", network: "eip155:196" as const }],
        extensions: [],
        signers: {},
      };
    },
    async verify() {
      calls.verify++;
      return opts.valid
        ? { isValid: true, payer: PAYER }
        : { isValid: false, invalidReason: "invalid_exact_evm_payload_signature" };
    },
    async settle() {
      calls.settle++;
      return opts.settles === false
        ? {
            success: false,
            status: "timeout" as const,
            errorReason: "insufficient_funds",
            transaction: "",
            network: "eip155:196" as const,
          }
        : {
            success: true,
            status: "success" as const,
            transaction: "0xabc123",
            network: "eip155:196" as const,
            payer: PAYER,
          };
    },
  };
}

const gatedApp = (facilitator: unknown) =>
  createApp(x402Middleware(buildResourceServer(facilitator as any)));

const decode = (b64: string) => JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
const encode = (v: unknown) => Buffer.from(JSON.stringify(v), "utf8").toString("base64");

const post = (app: Hono, headers: Record<string, string> = {}, prompt = "a coin that says GG") =>
  app.request("/v1/model", {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify({ prompt }),
  });

/** Ask for the challenge, then pay it — optionally tampering with the terms first. */
async function payFor(app: Hono, tamper: (accepted: any) => any = (a) => a, prompt?: string) {
  const challenge = decode((await post(app, {}, prompt)).headers.get("PAYMENT-REQUIRED")!);
  return post(
    app,
    {
      "PAYMENT-SIGNATURE": encode({
        x402Version: 2,
        accepted: tamper({ ...challenge.accepts[0] }),
        payload: { authorization: { from: PAYER }, signature: "0xsig" },
      }),
    },
    prompt
  );
}

describe("x402 payment gate (official OKX Payment SDK)", () => {
  it("challenges an unpaid call with a 402 and the correct X Layer terms", async () => {
    const facilitator = stubFacilitator({ valid: true });
    const res = await post(gatedApp(facilitator));

    expect(res.status).toBe(402);
    expect(facilitator.calls.settle).toBe(0);

    const challenge = decode(res.headers.get("PAYMENT-REQUIRED")!);
    expect(challenge.x402Version).toBe(2);
    expect(challenge.accepts).toHaveLength(1);
    expect(challenge.accepts[0]).toMatchObject({
      scheme: "exact",
      network: "eip155:196",
      asset: USDT0,
      amount: "50000", // $0.05 in atomic USD₮0 (6 decimals)
      payTo: PAY_TO,
    });
  });

  it("challenges the GET discovery probe too, so pricing is readable without a body", async () => {
    const res = await gatedApp(stubFacilitator({ valid: true })).request("/v1/model");
    expect(res.status).toBe(402);
    expect(decode(res.headers.get("PAYMENT-REQUIRED")!).accepts[0].amount).toBe("50000");
  });

  it("generates the model and settles when the facilitator accepts the payment", async () => {
    const facilitator = stubFacilitator({ valid: true });
    const res = await payFor(gatedApp(facilitator));

    expect(res.status).toBe(200);
    expect(facilitator.calls.verify).toBe(1);
    expect(facilitator.calls.settle).toBe(1);

    const body: any = await res.json();
    expect(body.ok).toBe(true);
    expect(body.spec.shape).toBe("coin");
    expect(body.viewerUrl).toContain("/m?s=");
    expect(body.printEstimate.priceUsd).toBeGreaterThan(0);

    expect(decode(res.headers.get("PAYMENT-RESPONSE")!)).toMatchObject({
      success: true,
      transaction: "0xabc123",
    });
  });

  it("refuses a payment the facilitator rejects — nothing is generated or settled", async () => {
    const facilitator = stubFacilitator({ valid: false });
    const res = await payFor(gatedApp(facilitator));

    expect(res.status).toBe(402);
    expect(facilitator.calls.settle).toBe(0);
    expect(await res.text()).not.toContain("stlUrl");
  });

  it("refuses an underpaying payment before it even reaches the facilitator", async () => {
    const facilitator = stubFacilitator({ valid: true });
    const res = await payFor(gatedApp(facilitator), (a) => ({ ...a, amount: "1" }));

    expect(res.status).toBe(402);
    expect(facilitator.calls.verify).toBe(0);
  });

  it("refuses a payment redirected to another payee", async () => {
    const facilitator = stubFacilitator({ valid: true });
    const res = await payFor(gatedApp(facilitator), (a) => ({ ...a, payTo: PAYER }));

    expect(res.status).toBe(402);
    expect(facilitator.calls.verify).toBe(0);
  });

  it("reports failed settlement instead of quietly delivering the model", async () => {
    const facilitator = stubFacilitator({ valid: true, settles: false });
    const res = await payFor(gatedApp(facilitator));

    expect(facilitator.calls.settle).toBe(1);
    expect(res.status).not.toBe(200);
  });

  it("leaves the free routes alone", async () => {
    const facilitator = stubFacilitator({ valid: true });
    const app = gatedApp(facilitator);

    expect((await app.request("/health")).status).toBe(200);
    expect((await app.request("/")).status).toBe(200);
    expect(facilitator.calls.supported).toBe(0); // no facilitator handshake for unpaid routes
  });

  it("fails closed when the facilitator is unreachable", async () => {
    const dead = {
      async getSupported() {
        throw new Error("facilitator down");
      },
      async verify() {
        throw new Error("unreachable");
      },
      async settle() {
        throw new Error("unreachable");
      },
    };
    const res = await post(gatedApp(dead));
    expect(res.status).toBe(503);
    expect(await res.text()).not.toContain("stlUrl");
  });

  it("closes the paid route entirely when OKX credentials are missing", async () => {
    const res = await post(createApp(null));
    expect(res.status).toBe(503);
    expect(await res.text()).not.toContain("stlUrl");
  });
});
