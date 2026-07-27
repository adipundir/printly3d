import { describe, it, expect } from "vitest";
import { generateFromRecipe, buildRecipe, isRecipe, type Recipe } from "../src/stl/dsl.js";
import { encodeRecipe, decodeRecipe } from "../src/server/spec-codec.js";

const mug: Recipe = {
  name: "mug",
  parts: [
    { type: "cylinder", radius: 20, height: 40, translate: [0, 0, 20] },
    { type: "cylinder", radius: 17, height: 38, translate: [0, 0, 23], cut: true },
    { type: "torus", ringRadius: 14, tubeRadius: 3, rotate: [90, 0, 0], translate: [22, 0, 22] },
  ],
};

function facetCount(stl: Buffer): number {
  return stl.readUInt32LE(80);
}

describe("recipe interpreter", () => {
  it("builds a composite solid (hollow mug with handle)", () => {
    const m = generateFromRecipe(mug);
    expect(facetCount(m.stl)).toBeGreaterThan(500);
    expect(m.volumeMm3).toBeGreaterThan(0);
    expect(m.bbox.z).toBeGreaterThan(30);
  });

  it("builds each primitive type", () => {
    for (const type of ["box", "cylinder", "cone", "sphere", "torus", "text"] as const) {
      const r: Recipe = { parts: [{ type, size: [10, 10, 10], radius: 6, height: 10, ringRadius: 8, tubeRadius: 2, text: "A", fontSize: 8 }] };
      const m = generateFromRecipe(r);
      expect(facetCount(m.stl)).toBeGreaterThan(0);
    }
  });

  it("rejects an empty recipe", () => {
    expect(() => buildRecipe({ parts: [] } as any)).toThrow();
  });

  it("validates recipe shape", () => {
    expect(isRecipe(mug)).toBe(true);
    expect(isRecipe({ parts: [{ nope: 1 }] })).toBe(false);
    expect(isRecipe(null)).toBeFalsy();
  });

  it("round-trips through the gzip URL codec", () => {
    const enc = encodeRecipe(mug);
    expect(enc).not.toContain("=");
    const dec = decodeRecipe(enc);
    expect(dec.parts.length).toBe(mug.parts.length);
    expect(dec.name).toBe("mug");
  });
});
