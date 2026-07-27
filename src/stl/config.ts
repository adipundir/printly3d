/**
 * X Layer / x402 constants for the STL service. Values come from the OKX A2MCP guide
 * (network eip155:196, USDT0 settlement token, 6 decimals).
 */
export const XLAYER = {
  network: "eip155:196",
  asset: "0x779ded0c9e1022225f8e0630b35a9b54be713736" as `0x${string}`,
  domainName: "USD₮0",
  domainVersion: "1",
} as const;

/** Service fee per model generation, in atomic USDT0 units (6 decimals). 50000 = 0.05 USDT0. */
export const PRICE_ATOMIC = process.env.MODEL_PRICE_ATOMIC ?? "50000";

/**
 * Receiving address for the service fee. MUST be set to your X Layer Agentic Wallet address
 * before going live. The placeholder lets the endpoint run and self-check locally.
 */
export const PAY_TO = (process.env.PAY_TO ??
  "0x0000000000000000000000000000000000000000") as `0x${string}`;

/** External print service the viewer page hands the STL off to (link-out; we never take the money). */
export const PRINT_HANDOFF_URL =
  process.env.PRINT_HANDOFF_URL ?? "https://craftcloud3d.com/";

export const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL ?? "";
