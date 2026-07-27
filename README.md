# Printly — Prompt → Printable 3D Model (OKX.AI ASP)

An OKX.AI Agent Service Provider (A2MCP). Send a short text prompt and get back a real,
watertight, **printable STL file**, a hosted **3D preview page**, and a **print-cost estimate**.
Pay per model with x402 (USDT0 on X Layer).

Ask for a **keychain**, **nameplate**, or **coin** with your own text — e.g.
`a keychain that says ADITYA` — and Printly returns a downloadable STL plus a preview URL where
you can rotate the model and send it straight to a print service.

## How it works

1. Your agent calls `POST /v1/model` with `{ "prompt": "..." }`.
2. Unpaid → **HTTP 402** with an x402 payment challenge (USDT0 on X Layer).
3. Paid → Printly parses the prompt, generates the model, and returns a **viewer URL**, an
   **STL download URL**, dimensions, estimated weight, and a print-cost estimate.
4. The viewer page shows the model in 3D with **Download STL** and an **Order a print** hand-off
   to an external print service (payment + shipping happen there, not here).

The service is **stateless** — the model is fully determined by the prompt, encoded into the URLs
and regenerated on demand. No database, no custody, no stored user data.

## Quick start

```bash
npm install
npm run serve        # boot the HTTP service on :3000
npm test             # generator + estimate + x402 endpoint tests
npm run typecheck
```

Try it:

```bash
# unpaid -> 402 challenge
curl -i -X POST localhost:3000/v1/model -H 'content-type: application/json' -d '{"prompt":"a keychain that says ADITYA"}'
# paid (any payment header for local testing) -> model + viewer URL
curl -X POST localhost:3000/v1/model -H 'x-payment: test' -H 'content-type: application/json' -d '{"prompt":"a coin that says WINNER"}'
```

Then open the returned `viewerUrl` in a browser to see the 3D preview.

## HTTP API

| Route | Purpose |
|---|---|
| `GET /` | service info |
| `GET /health` | health check |
| `GET /v1/model` | returns the x402 payment challenge (price discovery) |
| `POST /v1/model` `{prompt}` | unpaid → 402; paid → model + viewer/STL URLs + cost estimate |
| `GET /m?s=<spec>` | 3D viewer page for a model |
| `GET /stl?s=<spec>` | the STL bytes (`&dl=1` to force download) |

## Configuration

Environment variables (all optional for local use):

- `PAY_TO` — your X Layer wallet address that receives the service fee. **Set this before going
  live.** Defaults to a placeholder.
- `MODEL_PRICE_ATOMIC` — service fee in atomic USDT0 units (default `50000` = 0.05 USDT0).
- `PRINT_HANDOFF_URL` — external print service the viewer links to.
- `PUBLIC_BASE_URL` — override the base URL used in generated links (set to the deploy URL).

## Deploy

Bundled to a single serverless function (`api/index.js` via `npm run bundle`) and deployed on
Vercel with all routes rewritten to it. Validated with `onchainos agent x402-check` → `valid: true`.

## Status

- [x] Parametric STL generator (keychain, nameplate, coin), watertight + printable
- [x] Prompt parser, print-cost estimate, 3D viewer page
- [x] x402 `/v1/model` endpoint — passes `onchainos agent x402-check`
- [x] Stateless design, tests passing
- [ ] Deploy to public URL + set `PAY_TO`
- [ ] Register as an A2MCP ASP on OKX.AI; ≤90s demo; submit
- [ ] Verify real x402 settlement (OKX Payment SDK) before charging for real
