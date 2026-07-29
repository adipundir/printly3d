/**
 * Payment layer — the official OKX Payment SDK.
 *
 * `POST /v1/model` (and the `GET` discovery probe) are gated by
 * `@okxweb3/app-x402-hono`'s `paymentMiddleware`. Every payment is verified and settled
 * through the OKX facilitator (`x402ResourceServer` + `ExactEvmScheme` +
 * `OKXFacilitatorClient`) — we no longer hand-roll the 402 challenge or trust the caller's
 * payment header. Integration guide:
 * https://web3.okx.com/onchainos/dev-docs/payments/service-seller-sdk
 *
 * Flow per request, all of it inside the SDK:
 *   no PAYMENT-SIGNATURE header  -> 402 + `PAYMENT-REQUIRED` (base64 challenge)
 *   header present               -> facilitator /verify; invalid -> 402 with the reason
 *   verified                     -> our handler runs
 *   handler returned < 400       -> facilitator /settle; `PAYMENT-RESPONSE` on the reply
 *
 * The facilitator is the only party that touches the chain, so the seller needs no RPC,
 * no gas and no private key — just an OnchainOS API key.
 */
import { OKXFacilitatorClient } from "@okxweb3/app-x402-core";
import {
  x402HTTPResourceServer,
  x402ResourceServer,
  type RoutesConfig,
} from "@okxweb3/app-x402-core/server";
import { ExactEvmScheme } from "@okxweb3/app-x402-evm/exact/server";
import { paymentMiddlewareFromHTTPServer } from "@okxweb3/app-x402-hono";
import type { MiddlewareHandler } from "hono";
import {
  EXEMPT_PAYERS,
  MODEL_PRICE_USD,
  OKX,
  PAY_TO,
  SERVICE_DESCRIPTION,
  X402_NETWORK,
} from "../stl/config.js";

/** True when the three OnchainOS API credentials are present. */
export function paymentsConfigured(): boolean {
  return Boolean(OKX.apiKey && OKX.secretKey && OKX.passphrase);
}

/** Human-readable reason the payment layer can't start, or null when it can. */
export function paymentsMisconfiguration(): string | null {
  const missing: string[] = [];
  if (!OKX.apiKey) missing.push("OKX_API_KEY");
  if (!OKX.secretKey) missing.push("OKX_SECRET_KEY");
  if (!OKX.passphrase) missing.push("OKX_PASSPHRASE");
  if (missing.length) return `missing ${missing.join(", ")}`;
  if (!/^0x[a-fA-F0-9]{40}$/.test(PAY_TO) || /^0x0+$/.test(PAY_TO)) {
    return "PAY_TO is not a real address";
  }
  return null;
}

/** The one paid resource, priced in USD — the SDK converts it to atomic USDT0. */
const routes: RoutesConfig = {
  "GET /v1/model": {
    accepts: {
      scheme: "exact",
      network: X402_NETWORK,
      payTo: PAY_TO,
      price: MODEL_PRICE_USD,
      maxTimeoutSeconds: 300,
    },
    description: SERVICE_DESCRIPTION,
    mimeType: "application/json",
  },
  "POST /v1/model": {
    accepts: {
      scheme: "exact",
      network: X402_NETWORK,
      payTo: PAY_TO,
      price: MODEL_PRICE_USD,
      maxTimeoutSeconds: 300,
    },
    description: SERVICE_DESCRIPTION,
    mimeType: "application/json",
  },
};

/**
 * Build the resource server. Exported so tests can swap in a stub facilitator and exercise
 * the real middleware end to end without touching the network.
 */
export function buildResourceServer(
  facilitator: ConstructorParameters<typeof x402ResourceServer>[0]
): x402ResourceServer {
  const server = new x402ResourceServer(facilitator).register(
    X402_NETWORK,
    new ExactEvmScheme()
  );
  // OKX's review / sampling wallets, when configured: their signature is checked against the
  // facilitator but the call is served without charging (User Agreement §7.7).
  if (EXEMPT_PAYERS.length) server.exemptPayers(EXEMPT_PAYERS);
  return server;
}

/**
 * Wrap the SDK middleware so the facilitator handshake (`GET /supported`, which the SDK needs
 * before it can even build a challenge) happens on the first request and is retried on the
 * next one if it fails. Doing it here rather than via the SDK's `syncFacilitatorOnStart`
 * keeps the failure inside a request — on a serverless cold start an unawaited rejection at
 * module scope would take down the whole function.
 */
export function x402Middleware(server: x402ResourceServer): MiddlewareHandler {
  const httpServer = new x402HTTPResourceServer(server, routes);
  const inner = paymentMiddlewareFromHTTPServer(httpServer, undefined, undefined, false);

  let ready: Promise<void> | null = null;
  const ensureReady = () => {
    if (!ready) {
      ready = httpServer.initialize().catch((err) => {
        ready = null; // let the next request try again
        throw err;
      });
    }
    return ready;
  };

  return async (c, next) => {
    if (!c.req.path.startsWith("/v1/model")) return next();
    try {
      await ensureReady();
    } catch (err: any) {
      console.error("[printly] OKX facilitator handshake failed:", err?.message ?? err);
      return c.json(
        {
          ok: false,
          error: "payment service unavailable",
          detail: "could not reach the OKX facilitator to build a payment challenge",
        },
        503
      );
    }
    return inner(c, next);
  };
}

/** The live middleware, or null when credentials are missing (local dev without a key). */
export function createPaymentMiddleware(): MiddlewareHandler | null {
  const problem = paymentsMisconfiguration();
  if (problem) {
    console.warn(
      `[printly] x402 payments disabled — ${problem}. /v1/model will refuse requests. ` +
        `Create an API key at https://web3.okx.com/onchainos/dev-portal and set ` +
        `OKX_API_KEY / OKX_SECRET_KEY / OKX_PASSPHRASE.`
    );
    return null;
  }
  const facilitator = new OKXFacilitatorClient({
    apiKey: OKX.apiKey,
    secretKey: OKX.secretKey,
    passphrase: OKX.passphrase,
    baseUrl: OKX.baseUrl,
    // Wait for on-chain confirmation before we answer, so the PAYMENT-RESPONSE header we
    // hand back carries a real settled transaction rather than a "pending".
    syncSettle: true,
  });
  return x402Middleware(buildResourceServer(facilitator));
}
