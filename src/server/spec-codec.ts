import { gzipSync, gunzipSync } from "node:zlib";
import type { ModelSpec } from "../stl/generate.js";
import { isRecipe, type Recipe } from "../stl/dsl.js";

/**
 * Caps on what a URL is allowed to expand into. /m and /stl are free and rebuild the model on
 * every hit, so the query is untrusted input: without a ceiling, a short `?r=` gzip-bombs into
 * megabytes of JSON and burns the whole function timeout. Keep both limits well above anything
 * our own generator emits (a 25-part recipe is ~2 KB of JSON, a few hundred chars encoded).
 */
const MAX_ENCODED_CHARS = 4_096;
const MAX_DECODED_BYTES = 64 * 1024;

/** URL-safe encoding of a ModelSpec so the whole service can be stateless. */
export function encodeSpec(spec: ModelSpec): string {
  const json = JSON.stringify({ shape: spec.shape, text: spec.text, textSize: spec.textSize });
  return Buffer.from(json, "utf8").toString("base64url");
}

export function decodeSpec(s: string): ModelSpec {
  if (s.length > MAX_ENCODED_CHARS) throw new Error("spec reference too large");
  const obj = JSON.parse(Buffer.from(s, "base64url").toString("utf8"));
  if (!obj || typeof obj.shape !== "string" || typeof obj.text !== "string") {
    throw new Error("bad spec");
  }
  return obj as ModelSpec;
}

/**
 * URL-safe encoding of an AI-generated Recipe. gzip-compressed so a multi-part recipe still
 * fits comfortably in a query string — the model is regenerated deterministically from this,
 * so /m and /stl never re-call the LLM.
 */
export function encodeRecipe(recipe: Recipe): string {
  const json = JSON.stringify(recipe);
  return gzipSync(Buffer.from(json, "utf8")).toString("base64url");
}

export function decodeRecipe(r: string): Recipe {
  if (r.length > MAX_ENCODED_CHARS) throw new Error("recipe reference too large");
  const json = gunzipSync(Buffer.from(r, "base64url"), {
    maxOutputLength: MAX_DECODED_BYTES,
  }).toString("utf8");
  const obj = JSON.parse(json);
  if (!isRecipe(obj)) throw new Error("bad recipe");
  return obj as Recipe;
}
