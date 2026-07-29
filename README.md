# Printly — Prompt → Printable 3D Model (OKX.AI ASP)

An OKX.AI Agent Service Provider (A2MCP). Send a short text prompt and get back a real,
watertight, **printable STL file**, a hosted **3D preview page**, and a **print-cost estimate**.
Pay per model with x402 (USDT0 on X Layer).

Ask for a **keychain**, **nameplate**, or **coin** with your own text — e.g.
`a keychain that says ADITYA` — and Printly returns a downloadable STL plus a preview URL where
you can rotate the model and send it straight to a print service.

## How it works

1. Your agent calls `POST /v1/model` with `{ "prompt": "..." }`.
2. Unpaid → **HTTP 402** with an x402 payment challenge (USD₮0 on X Layer).
3. The agent signs the challenge and retries with a `PAYMENT-SIGNATURE` header. The **official
   OKX Payment SDK** verifies it against the OKX facilitator; only then does the model get built.
4. Printly parses the prompt, generates the model, and returns a **viewer URL**, an **STL
   download URL**, dimensions, estimated weight, and a print-cost estimate — and the SDK settles
   the payment on chain, returning the transaction in a `PAYMENT-RESPONSE` header.
5. The viewer page shows the model in 3D with **Download STL** and an **Order a print** hand-off
   to an external print service (payment + shipping happen there, not here).

Payments go through [`@okxweb3/app-x402-hono`](https://web3.okx.com/onchainos/dev-docs/payments/service-seller-sdk)
(+ `-core` / `-evm`). The facilitator does all the on-chain work, so this service holds no
private key, needs no RPC and never pays gas. A request whose payment does not verify is never
served, and settlement only runs if the model was generated successfully.

The service is **stateless** — the model is fully determined by the prompt, encoded into the URLs
and regenerated on demand. No database, no custody, no stored user data.

## Quick start

```bash
npm install
cp .env.example .env  # then fill in OKX_API_KEY / OKX_SECRET_KEY / OKX_PASSPHRASE + PAY_TO
npm run serve         # boot the HTTP service on :3000
npm test              # generator, estimate, and the payment gate against a stub facilitator
npm run typecheck
```

Try it:

```bash
# unpaid -> 402 + a PAYMENT-REQUIRED challenge
curl -i -X POST localhost:3000/v1/model -H 'content-type: application/json' -d '{"prompt":"a keychain that says ADITYA"}'
```

To pay it, point an x402 client at the endpoint — e.g. `onchainos payment pay --payload <the
base64 PAYMENT-REQUIRED value>` and replay the request with the header it returns. There is no
local bypass: without a verified payment the endpoint returns 402. Open the returned `viewerUrl`
in a browser to see the 3D preview.

## HTTP API

| Route | Purpose |
|---|---|
| `GET /` | service info |
| `GET /health` | health check |
| `GET /v1/model` | same paid route — unpaid returns the x402 challenge, for price discovery |
| `POST /v1/model` `{prompt}` | unpaid → 402; paid → model + viewer/STL URLs + cost estimate |
| `GET /m?s=<spec>` | 3D viewer page for a model |
| `GET /stl?s=<spec>` | the STL bytes (`&dl=1` to force download) |

## Configuration

**Required** — `/v1/model` refuses every request without these:

- `OKX_API_KEY`, `OKX_SECRET_KEY`, `OKX_PASSPHRASE` — API key for the OKX facilitator, created
  at the [OnchainOS Developer Portal](https://web3.okx.com/onchainos/dev-portal). The secret is
  shown once.
- `PAY_TO` — the X Layer wallet address that receives the service fee.

Optional:

- `MODEL_PRICE_USD` — service fee in USD, converted to atomic USD₮0 by the SDK (default `0.05`).
- `X402_NETWORK` — `eip155:196` (X Layer mainnet, default) or `eip155:1952` (testnet).
- `X402_EXEMPT_PAYERS` — comma-separated payer addresses served without being charged once the
  facilitator confirms their signature (for OKX's review / sampling calls).
- `OKX_BASE_URL` — facilitator host (default `https://web3.okx.com`).
- `PRINT_HANDOFF_URL` — external print service the viewer links to.
- `PUBLIC_BASE_URL` — override the base URL used in generated links (set to the deploy URL).

## Deploy

Bundled to a single serverless function (`api/index.js` via `npm run bundle`) and deployed on
Vercel with all routes rewritten to it. Validated with `onchainos agent x402-check`.

`api/index.js` is **committed**, not generated at deploy time: Vercel validates the `functions`
pattern in `vercel.json` against the source tree before it runs install or build, so a repo
without the bundle fails with *"the pattern api/index.js doesn't match any Serverless
Functions"*. Run `npm run bundle` and commit the result whenever `src/` changes.

## Status

- [x] Parametric STL generator (keychain, nameplate, coin), watertight + printable
- [x] Prompt parser, print-cost estimate, 3D viewer page
- [x] Payments on the official OKX Payment SDK — real verify + settle via the OKX facilitator
- [x] Stateless design, tests passing (incl. the gate, against a stub facilitator)
- [ ] Set the OKX facilitator credentials in the deploy environment
- [ ] Re-run `onchainos agent x402-check`, resubmit the ASP listing for review
