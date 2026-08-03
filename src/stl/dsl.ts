/**
 * Build-recipe interpreter.
 *
 * An LLM cannot emit a 3D mesh directly, so instead it emits a small JSON "recipe" that
 * composes printable primitives (box, cylinder, cone, sphere, torus, text) with placement and
 * boolean cuts. This module turns that recipe into a watertight JSCAD solid — deterministically
 * and with NO code execution (the recipe is pure data, so it is safe to run untrusted output).
 *
 * Units are millimetres.
 */
import jscad from "@jscad/modeling";
import { solidText, finalize, type GeneratedModel } from "./generate.js";

const { primitives, booleans, transforms } = jscad as any;

export type Vec3 = [number, number, number];

export interface RecipeNode {
  type: "box" | "cylinder" | "cone" | "sphere" | "torus" | "text";
  // dimensions (mm)
  size?: Vec3; // box [x,y,z]
  radius?: number; // cylinder / sphere
  height?: number; // cylinder / cone
  radiusTop?: number; // cone
  radiusBottom?: number; // cone
  ringRadius?: number; // torus: centre -> tube centre
  tubeRadius?: number; // torus: tube thickness
  text?: string; // text glyphs
  fontSize?: number; // text cap height
  thickness?: number; // text extrude depth
  // placement
  translate?: Vec3;
  rotate?: Vec3; // degrees about x, y, z
  // combination
  cut?: boolean; // subtract from the model instead of adding
}

export interface Recipe {
  name?: string;
  parts: RecipeNode[];
}

const MAX_PARTS = 120;
const MAX_DIM = 250; // mm
const MIN_DIM = 0.2;
const MAX_TEXT = 40;

function clamp(n: unknown, lo: number, hi: number, dflt: number): number {
  const v = typeof n === "number" && isFinite(n) ? n : dflt;
  return Math.max(lo, Math.min(hi, v));
}

function clampDim(n: unknown, dflt: number): number {
  return clamp(n, MIN_DIM, MAX_DIM, dflt);
}

const deg2rad = (d: number) => (d * Math.PI) / 180;

function buildNode(node: RecipeNode): any {
  let g: any;
  switch (node.type) {
    case "box": {
      const s = Array.isArray(node.size) ? node.size : [10, 10, 10];
      g = primitives.cuboid({ size: [clampDim(s[0], 10), clampDim(s[1], 10), clampDim(s[2], 10)] });
      break;
    }
    case "cylinder":
      g = primitives.cylinder({
        radius: clampDim(node.radius, 5),
        height: clampDim(node.height, 10),
        segments: 64,
      });
      break;
    case "cone":
      g = primitives.cylinderElliptic({
        height: clampDim(node.height, 10),
        startRadius: [clampDim(node.radiusBottom ?? node.radius, 5), clampDim(node.radiusBottom ?? node.radius, 5)],
        endRadius: [clamp(node.radiusTop, 0, MAX_DIM, 0), clamp(node.radiusTop, 0, MAX_DIM, 0)],
        segments: 64,
      });
      break;
    case "sphere":
      g = primitives.sphere({ radius: clampDim(node.radius, 5), segments: 48 });
      break;
    case "torus":
      g = primitives.torus({
        innerRadius: clampDim(node.tubeRadius, 2),
        outerRadius: clampDim(node.ringRadius, 8),
        innerSegments: 24,
        outerSegments: 48,
      });
      break;
    case "text": {
      const str = String(node.text ?? "").slice(0, MAX_TEXT) || "A";
      const cap = clamp(node.fontSize, 2, 120, 10);
      const depth = clampDim(node.thickness, Math.max(2, cap * 0.3));
      g = solidText(str, cap, depth, Math.max(0.8, cap * 0.13));
      break;
    }
    default:
      throw new Error(`unknown part type: ${(node as any).type}`);
  }

  if (Array.isArray(node.rotate)) {
    g = transforms.rotate(
      [deg2rad(node.rotate[0] || 0), deg2rad(node.rotate[1] || 0), deg2rad(node.rotate[2] || 0)],
      g
    );
  }
  if (Array.isArray(node.translate)) {
    g = transforms.translate(
      [
        clamp(node.translate[0], -MAX_DIM, MAX_DIM, 0),
        clamp(node.translate[1], -MAX_DIM, MAX_DIM, 0),
        clamp(node.translate[2], -MAX_DIM, MAX_DIM, 0),
      ],
      g
    );
  }
  return g;
}

/**
 * Rough polygon cost per primitive, used to bound CSG work before we start it. Part count alone
 * is a bad proxy: spheres and text tessellate into far more polygons than a box, and boolean
 * union/subtract cost grows with total polygon count, not part count. /m and /stl rebuild from
 * an untrusted query, so a recipe that would take a minute has to be refused up front rather
 * than discovered by timing out.
 */
const PART_COST: Record<string, number> = {
  box: 12,
  cylinder: 128,
  cone: 128,
  sphere: 1_100,
  torus: 2_000,
  text: 1_500,
};
const MAX_COMPLEXITY = 40_000;

function recipeCost(recipe: Recipe): number {
  return recipe.parts.reduce((sum, p) => sum + (PART_COST[String(p.type)] ?? 128), 0);
}

/** Validate + build a recipe into a single watertight geom3. Throws on an unusable recipe. */
export function buildRecipe(recipe: Recipe): any {
  if (!recipe || !Array.isArray(recipe.parts) || recipe.parts.length === 0) {
    throw new Error("recipe has no parts");
  }
  if (recipe.parts.length > MAX_PARTS) {
    throw new Error(`too many parts (${recipe.parts.length} > ${MAX_PARTS})`);
  }
  const cost = recipeCost(recipe);
  if (cost > MAX_COMPLEXITY) {
    throw new Error(`recipe too complex (cost ${cost} > ${MAX_COMPLEXITY})`);
  }

  const solids: any[] = [];
  const cuts: any[] = [];
  for (const node of recipe.parts) {
    const g = buildNode(node);
    (node.cut ? cuts : solids).push(g);
  }
  if (solids.length === 0) throw new Error("recipe has no additive parts");

  let body = solids.length === 1 ? solids[0] : booleans.union(solids);
  if (cuts.length) {
    body = booleans.subtract(body, cuts.length === 1 ? cuts[0] : booleans.union(cuts));
  }
  return body;
}

/** Lightweight structural validation of a parsed recipe (before building). */
export function isRecipe(x: any): x is Recipe {
  return x && Array.isArray(x.parts) && x.parts.every((p: any) => p && typeof p.type === "string");
}

/** Build a recipe all the way to STL bytes + geometry facts. */
export function generateFromRecipe(recipe: Recipe): GeneratedModel {
  return finalize(buildRecipe(recipe));
}
