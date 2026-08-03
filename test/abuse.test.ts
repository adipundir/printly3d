/**
 * Abuse guards for the free regeneration routes.
 *
 * /m and /stl rebuild a model from an attacker-controlled query with no payment, so they are
 * the cheapest thing to attack — and were: a burst of crafted references drove 89 requests into
 * Vercel's 60s timeout. These tests pin the ceilings that make that impossible.
 */
import { describe, it, expect, beforeAll } from "vitest";
import { gzipSync } from "node:zlib";

let decodeRecipe: typeof import("../src/server/spec-codec.js")["decodeRecipe"];
let decodeSpec: typeof import("../src/server/spec-codec.js")["decodeSpec"];
let buildRecipe: typeof import("../src/stl/dsl.js")["buildRecipe"];
let createApp: typeof import("../src/server/app.js")["createApp"];

beforeAll(async () => {
  ({ decodeRecipe, decodeSpec } = await import("../src/server/spec-codec.js"));
  ({ buildRecipe } = await import("../src/stl/dsl.js"));
  ({ createApp } = await import("../src/server/app.js"));
});

const b64url = (b: Buffer) => b.toString("base64url");

describe("query decode limits", () => {
  it("refuses a gzip bomb instead of expanding it", () => {
    // ~1 MB of JSON behind a ~1.4 KB reference: 700x amplification, comfortably under the URL
    // length cap, so the decode ceiling — not the length check — is what has to catch it.
    const bomb = gzipSync(
      Buffer.from(JSON.stringify({ parts: [{ type: "box", n: "x".repeat(1_000_000) }] })),
      { level: 9 }
    );
    const encoded = b64url(bomb);
    expect(encoded.length).toBeLessThan(4_096);
    expect(() => decodeRecipe(encoded)).toThrow();
  });

  it("refuses an over-long reference before decoding it", () => {
    expect(() => decodeRecipe("A".repeat(5_000))).toThrow(/too large/);
    expect(() => decodeSpec("A".repeat(5_000))).toThrow(/too large/);
  });

  it("still round-trips a realistic recipe", async () => {
    const { encodeRecipe } = await import("../src/server/spec-codec.js");
    const recipe = {
      name: "rocket",
      parts: Array.from({ length: 12 }, (_, i) => ({
        type: "cylinder" as const,
        radius: 5,
        height: 10,
        translate: [0, 0, i * 10] as [number, number, number],
      })),
    };
    const encoded = encodeRecipe(recipe);
    expect(encoded.length).toBeLessThan(4_096);
    expect(decodeRecipe(encoded).parts).toHaveLength(12);
  });
});

describe("build complexity ceiling", () => {
  it("refuses a recipe whose CSG cost would blow the function timeout", () => {
    // 100 spheres is inside MAX_PARTS but is minutes of boolean union.
    const heavy = {
      name: "bomb",
      parts: Array.from({ length: 100 }, () => ({ type: "sphere" as const, radius: 20 })),
    };
    expect(() => buildRecipe(heavy)).toThrow(/too complex/);
  });

  it("still builds a normal multi-part model", () => {
    const ok = {
      name: "mug",
      parts: [
        { type: "cylinder" as const, radius: 20, height: 40 },
        { type: "cylinder" as const, radius: 17, height: 38, cut: true },
        { type: "torus" as const, ringRadius: 14, tubeRadius: 3 },
      ],
    };
    expect(() => buildRecipe(ok)).not.toThrow();
  });
});

describe("cacheability of the free routes", () => {
  it("marks generated models cacheable so repeats never reach the function", async () => {
    const app = createApp(null); // payment gate irrelevant — these routes are free
    const s = Buffer.from(JSON.stringify({ shape: "keychain", text: "HI" })).toString("base64url");

    const stl = await app.request(`/stl?s=${s}`);
    expect(stl.status).toBe(200);
    expect(stl.headers.get("Cache-Control")).toMatch(/s-maxage=\d{5,}/);

    const viewer = await app.request(`/m?s=${s}`);
    expect(viewer.status).toBe(200);
    expect(viewer.headers.get("Cache-Control")).toMatch(/s-maxage=\d{5,}/);
  });

  it("caches rejections briefly so bad references can't hammer the origin", async () => {
    const app = createApp(null);
    const res = await app.request("/stl?s=not-valid");
    expect(res.status).toBe(400);
    expect(res.headers.get("Cache-Control")).toMatch(/s-maxage=\d+/);
  });
});
