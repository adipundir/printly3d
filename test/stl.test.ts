import { describe, it, expect } from "vitest";
import { generateModel } from "../src/stl/generate.js";
import { parsePrompt } from "../src/stl/spec.js";
import { estimatePrint } from "../src/stl/estimate.js";
import { encodeSpec } from "../src/server/spec-codec.js";
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

// The payment gate itself is covered end to end in test/x402.test.ts, against the real OKX
// Payment SDK middleware with a stub facilitator.
describe("free routes", () => {
  it("serves a valid STL from the stateless spec URL", async () => {
    const encoded = encodeSpec(parsePrompt("keychain HELLO"));
    const stlRes = await app.request(`/stl?s=${encoded}`);
    expect(stlRes.status).toBe(200);
    expect(stlRes.headers.get("content-type")).toBe("model/stl");
    const buf = Buffer.from(await stlRes.arrayBuffer());
    expect(facetCount(buf)).toBeGreaterThan(100);
  });

  it("renders the 3D viewer page for that same spec", async () => {
    const encoded = encodeSpec(parsePrompt("keychain HELLO"));
    const res = await app.request(`/m?s=${encoded}`);
    expect(res.status).toBe(200);
    expect(await res.text()).toContain("HELLO");
  });

  it("describes the service and its price at the root", async () => {
    const body: any = await (await app.request("/")).json();
    expect(body.service).toBe("Printly");
    expect(body.payment).toContain("eip155:196");
  });
});
