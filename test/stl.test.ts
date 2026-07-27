import { describe, it, expect } from "vitest";
import { generateModel } from "../src/stl/generate.js";
import { parsePrompt } from "../src/stl/spec.js";
import { estimatePrint } from "../src/stl/estimate.js";
import { app } from "../src/server/app.js";

function facetCount(stl: Buffer): number {
  return stl.readUInt32LE(80); // binary STL header
}

describe("generator", () => {
  for (const shape of ["keychain", "nameplate", "coin"] as const) {
    it(`produces a non-trivial printable STL for ${shape}`, () => {
      const m = generateModel({ shape, text: "TEST" });
      expect(m.stl.length).toBeGreaterThan(1000);
      expect(facetCount(m.stl)).toBeGreaterThan(100);
      expect(m.volumeMm3).toBeGreaterThan(0);
      expect(m.bbox.z).toBeGreaterThan(0);
    });
  }
});

describe("prompt parser", () => {
  it("detects keychain and extracts quoted text", () => {
    const s = parsePrompt('a keychain that says "ADITYA"');
    expect(s.shape).toBe("keychain");
    expect(s.text).toBe("ADITYA");
  });
  it("detects coin", () => {
    expect(parsePrompt("a coin with the word WINNER").shape).toBe("coin");
  });
  it("detects nameplate and strips filler", () => {
    const s = parsePrompt("desk nameplate for Priya");
    expect(s.shape).toBe("nameplate");
    expect(s.text).toBe("Priya");
  });
  it("reads a size hint", () => {
    expect(parsePrompt("keyring 40mm saying GO").textSize).toBeGreaterThan(0);
  });
  it("rejects an empty prompt", () => {
    expect(() => parsePrompt("   ")).toThrow();
  });
});

describe("estimate", () => {
  it("scales with volume and is transparent", () => {
    const small = estimatePrint(1000);
    const big = estimatePrint(50000);
    expect(big.grams).toBeGreaterThan(small.grams);
    expect(big.priceUsd).toBeGreaterThan(small.priceUsd);
    expect(small.material).toBe("PLA");
  });
});

describe("x402 endpoint", () => {
  it("returns 402 with a PAYMENT-REQUIRED header when unpaid", async () => {
    const res = await app.request("/v1/model", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ prompt: "a keychain that says HI" }),
    });
    expect(res.status).toBe(402);
    const hdr = res.headers.get("PAYMENT-REQUIRED");
    expect(hdr).toBeTruthy();
    const challenge = JSON.parse(Buffer.from(hdr!, "base64").toString("utf8"));
    expect(challenge.x402Version).toBe(2);
    expect(challenge.accepts[0].network).toBe("eip155:196");
  });

  it("returns a model + viewer URL when a payment header is present", async () => {
    const res = await app.request("/v1/model", {
      method: "POST",
      headers: { "content-type": "application/json", "x-payment": "test" },
      body: JSON.stringify({ prompt: "a coin that says GG" }),
    });
    expect(res.status).toBe(200);
    const body: any = await res.json();
    expect(body.ok).toBe(true);
    expect(body.spec.shape).toBe("coin");
    expect(body.viewerUrl).toContain("/m?s=");
    expect(body.stlUrl).toContain("/stl?s=");
    expect(body.printEstimate.priceUsd).toBeGreaterThan(0);
  });

  it("serves a valid STL from the stateless spec URL", async () => {
    const gen = await app.request("/v1/model", {
      method: "POST",
      headers: { "content-type": "application/json", "x-payment": "test" },
      body: JSON.stringify({ prompt: "keychain HELLO" }),
    });
    const { stlUrl } = (await gen.json()) as any;
    const path = new URL(stlUrl).pathname + new URL(stlUrl).search;
    const stlRes = await app.request(path);
    expect(stlRes.status).toBe(200);
    expect(stlRes.headers.get("content-type")).toBe("model/stl");
    const buf = Buffer.from(await stlRes.arrayBuffer());
    expect(facetCount(buf)).toBeGreaterThan(100);
  });
});
