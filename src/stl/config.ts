/**
 * X Layer / x402 constants for the STL service. Payment itself is handled by the official
 * OKX Payment SDK (see `src/x402/payment.ts`) — the SDK resolves the settlement asset for the
 * network (USD₮0, 6 decimals, on eip155:196) so we only declare the network and a USD price.
 */

/** CAIP-2 network. eip155:196 = X Layer mainnet, eip155:1952 = X Layer testnet. */
export const X402_NETWORK = (process.env.X402_NETWORK ?? "eip155:196") as `${string}:${string}`;

/** Service fee per model generation, as a USD price string the SDK converts to atomic USD₮0. */
export const MODEL_PRICE_USD = `$${process.env.MODEL_PRICE_USD ?? "0.05"}`;

/**
 * Receiving address for the service fee. MUST be a real X Layer Agentic Wallet address —
 * the payment layer refuses to start on the zero address.
 */
export const PAY_TO = (process.env.PAY_TO ??
  "0x0000000000000000000000000000000000000000") as `0x${string}`;

/** OnchainOS API credentials for the OKX facilitator (web3.okx.com/onchainos/dev-portal). */
export const OKX = {
  apiKey: process.env.OKX_API_KEY ?? "",
  secretKey: process.env.OKX_SECRET_KEY ?? "",
  passphrase: process.env.OKX_PASSPHRASE ?? "",
  baseUrl: process.env.OKX_BASE_URL ?? "https://web3.okx.com",
} as const;

/**
 * Payer addresses served without being charged, after the facilitator confirms their
 * signature — for OKX's own review / sampling calls. Comma-separated.
 */
export const EXEMPT_PAYERS = (process.env.X402_EXEMPT_PAYERS ?? "")
  .split(",")
  .map((a) => a.trim())
  .filter(Boolean);

export const SERVICE_DESCRIPTION = "Generate one printable STL model from a text prompt";

/** External print service the viewer page hands the STL off to (link-out; we never take the money). */
export const PRINT_HANDOFF_URL =
  process.env.PRINT_HANDOFF_URL ?? "https://craftcloud3d.com/";

export const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL ?? "";
