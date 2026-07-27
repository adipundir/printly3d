/**
 * Parametric STL generator.
 *
 * Turns a small catalog of printable objects (keychain, nameplate, coin) plus a text
 * string into a real, watertight, printable solid using JSCAD. No native binaries, no paid
 * 3D-generation API — pure JS, so it runs anywhere Node runs (including serverless).
 *
 * Units are millimetres throughout (STL is unitless; slicers assume mm).
 */
import jscad from "@jscad/modeling";
import stlSerializer from "@jscad/stl-serializer";

const { primitives, booleans, extrusions, transforms, text, geometries, expansions, measurements } =
  jscad as any;

export type ShapeKind = "keychain" | "nameplate" | "coin";

export interface ModelSpec {
  shape: ShapeKind;
  text: string;
  /** overrides in mm; sensible defaults per shape otherwise */
  height?: number; // z thickness of the base
  textSize?: number; // glyph cap height in mm
}

/** Build solid 3D text centered on the XY origin, sitting on z=0. Returns geom3. */
export function solidText(str: string, capHeight: number, depth: number, strokeWidth: number) {
  // vectorText returns an array of segments; each segment is an array of [x,y] points (a polyline).
  const segments: number[][][] = text.vectorText({ input: str || " ", height: capHeight });
  if (!segments.length) throw new Error("no glyphs produced for text");

  const outlines = segments.map((points) => {
    const path = geometries.path2.fromPoints({ closed: false }, points);
    // give the centerline stroke real width so it becomes a printable 2D solid
    return expansions.expand({ delta: strokeWidth, corners: "round" }, path);
  });
  const flat = outlines.length === 1 ? outlines[0] : booleans.union(outlines);
  const solid = extrusions.extrudeLinear({ height: depth }, flat);

  // center it on the origin using its bounding box
  const [min, max] = measurements.measureBoundingBox(solid);
  const cx = (min[0] + max[0]) / 2;
  const cy = (min[1] + max[1]) / 2;
  return transforms.translate([-cx, -cy, 0], solid);
}

/** width/height of a text solid's bounding box in XY (mm). */
function textFootprint(g: any): { w: number; h: number } {
  const [min, max] = measurements.measureBoundingBox(g);
  return { w: max[0] - min[0], h: max[1] - min[1] };
}

function makeKeychain(spec: ModelSpec) {
  const capH = spec.textSize ?? 8;
  const base = spec.height ?? 3;
  const textDepth = base; // text spans full thickness (through-cut style but raised)
  const stroke = Math.max(0.8, capH * 0.14);

  const label = solidText(spec.text, capH, textDepth, stroke);
  const { w, h } = textFootprint(label);

  const padX = capH * 0.9;
  const padY = capH * 0.7;
  const plateW = w + padX * 2;
  const plateH = h + padY * 2;
  const r = Math.min(plateH / 2, 6);

  // rounded rectangular plate
  const plate = extrusions.extrudeLinear(
    { height: base },
    expansions.expand(
      { delta: r, corners: "round" },
      primitives.rectangle({ size: [plateW - 2 * r, plateH - 2 * r] })
    )
  );

  // hanging ring on the left edge
  const ringR = plateH * 0.28;
  const ring = booleans.subtract(
    primitives.cylinder({ radius: ringR, height: base, segments: 48 }),
    primitives.cylinder({ radius: ringR * 0.5, height: base + 2, segments: 48 })
  );
  const ringPlaced = transforms.translate([-plateW / 2 - ringR * 0.4, 0, base / 2], ring);

  const body = booleans.union(plate, ringPlaced);
  // raise the text slightly proud of the plate so it reads after printing
  const raisedText = transforms.translate([0, 0, base * 0.5], label);
  return booleans.union(body, raisedText);
}

function makeNameplate(spec: ModelSpec) {
  const capH = spec.textSize ?? 12;
  const base = spec.height ?? 4;
  const stroke = Math.max(1.0, capH * 0.13);

  const label = solidText(spec.text, capH, base * 0.6, stroke);
  const { w, h } = textFootprint(label);

  const padX = capH * 1.1;
  const padY = capH * 0.9;
  const plateW = w + padX * 2;
  const plateH = h + padY * 2;

  const plate = primitives.roundedRectangle
    ? extrusions.extrudeLinear(
        { height: base },
        primitives.roundedRectangle({ size: [plateW, plateH], roundRadius: Math.min(padY, 8) })
      )
    : extrusions.extrudeLinear({ height: base }, primitives.rectangle({ size: [plateW, plateH] }));

  const raisedText = transforms.translate([0, 0, base], label);
  return booleans.union(plate, raisedText);
}

function makeCoin(spec: ModelSpec) {
  const capH = spec.textSize ?? 9;
  const base = spec.height ?? 3;
  const stroke = Math.max(0.9, capH * 0.14);

  const label = solidText(spec.text, capH, base * 0.6, stroke);
  const { w, h } = textFootprint(label);
  const needed = Math.max(w, h) / 2 + capH * 0.8;
  const radius = Math.max(needed, 12);

  const disc = primitives.cylinder({ radius, height: base, segments: 96 });
  const rim = booleans.subtract(
    primitives.cylinder({ radius, height: base, segments: 96 }),
    primitives.cylinder({ radius: radius - Math.max(1, radius * 0.08), height: base + 2, segments: 96 })
  );
  const raisedText = transforms.translate([0, 0, base / 2], label);
  return booleans.union(disc, transforms.translate([0, 0, base * 0.0], rim), raisedText);
}

export function buildGeometry(spec: ModelSpec) {
  switch (spec.shape) {
    case "keychain":
      return makeKeychain(spec);
    case "nameplate":
      return makeNameplate(spec);
    case "coin":
      return makeCoin(spec);
    default:
      throw new Error(`unknown shape: ${(spec as any).shape}`);
  }
}

export interface GeneratedModel {
  stl: Buffer;
  bbox: { x: number; y: number; z: number }; // mm
  volumeMm3: number;
}

/** Serialize any JSCAD geom3 to STL bytes + bounding box + volume. */
export function finalize(geom: any): GeneratedModel {
  const [min, max] = measurements.measureBoundingBox(geom);
  const volumeMm3 = measurements.measureVolume(geom);
  const raw = stlSerializer.serialize({ binary: true }, geom);
  // binary serializer returns an array of ArrayBuffers
  const buffers = (Array.isArray(raw) ? raw : [raw]).map((a: ArrayBuffer) => Buffer.from(a));
  return {
    stl: Buffer.concat(buffers),
    bbox: { x: max[0] - min[0], y: max[1] - min[1], z: max[2] - min[2] },
    volumeMm3,
  };
}

/** Generate the STL bytes plus geometry facts used for the cost estimate. */
export function generateModel(spec: ModelSpec): GeneratedModel {
  return finalize(buildGeometry(spec));
}
