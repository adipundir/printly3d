/**
 * x402 v2 wire types (the subset Veil uses).
 *
 * Grounded in the OKX payments-protocol `exact` scheme: an EIP-3009
 * `transferWithAuthorization` bound to (from, to, value, nonce, validAfter, validBefore).
 * The settlement `payer` is simply whichever wallet signed — there is no agent-identity
 * field in the payment path, which is precisely what lets the relay pay as itself.
 */

/** A single accepted payment option in a PAYMENT-REQUIRED challenge. */
export interface AcceptsEntry {
  scheme: "exact";
  /** CAIP-2 network, e.g. "eip155:196" (X Layer). */
  network: string;
  /** settlement token contract address */
  asset: `0x${string}`;
  /** amount in atomic units (string) */
  amount: string;
  /** token decimals, so validators need not look the asset up (USDT0 = 6) */
  decimals?: number;
  /** recipient of the payment */
  payTo: `0x${string}`;
  /** max seconds the buyer's signed authorization stays valid */
  maxTimeoutSeconds: number;
  extra?: {
    /** EIP-712 domain name of the token's transferWithAuthorization */
    name?: string;
    version?: string;
    assetTransferMethod?: "eip3009" | "permit2";
  };
}

/** Body of a 402 PAYMENT-REQUIRED response. */
export interface PaymentRequired {
  x402Version: 2;
  resource: {
    url: string;
    description?: string;
    mimeType?: string;
  };
  accepts: AcceptsEntry[];
}

/** EIP-3009 authorization the payer signs. */
export interface Eip3009Authorization {
  from: `0x${string}`;
  to: `0x${string}`;
  value: string; // atomic
  validAfter: string; // unix seconds
  validBefore: string; // unix seconds
  nonce: `0x${string}`; // 32-byte
}

/** The signed payment payload replayed in the PAYMENT-SIGNATURE header. */
export interface PaymentPayload {
  x402Version: 2;
  scheme: "exact";
  network: string;
  asset: `0x${string}`;
  authorization: Eip3009Authorization;
  signature: `0x${string}`;
}

/** Result of settlement, decoded from the PAYMENT-RESPONSE header. */
export interface SettlementResult {
  status: "settled" | "pending" | "failed";
  payer: `0x${string}`;
  payTo: `0x${string}`;
  amount: string;
  transaction?: `0x${string}`;
  network: string;
  reason?: string;
}

export function encodeHeader(payload: PaymentPayload): string {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64");
}

export function decodeHeader(value: string): PaymentPayload {
  return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
}

export function encodeChallenge(pr: PaymentRequired): string {
  return Buffer.from(JSON.stringify(pr), "utf8").toString("base64");
}

export function decodeChallenge(value: string): PaymentRequired {
  return JSON.parse(Buffer.from(value, "base64").toString("utf8"));
}
