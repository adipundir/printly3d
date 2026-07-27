/**
 * OpenRouter client: prompt -> build-recipe (JSON).
 *
 * OpenRouter serves LLMs, which cannot emit a 3D mesh — so the model returns a JSON recipe of
 * primitives that our interpreter (src/stl/dsl.ts) turns into a printable solid. The model is
 * configurable via OPENROUTER_MODEL; free models are slow (~30s), so callers should allow time
 * and fall back to templates on failure.
 */
import { isRecipe, type Recipe } from "../stl/dsl.js";

const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = "poolside/laguna-xs-2.1:free";

const SYSTEM = `You are a parametric CAD designer for 3D printing. Given an object description, output ONLY a JSON "recipe" that builds the object by composing primitives. No prose, no markdown fences.

JSON shape: {"name":"<short name>","parts":[Part,...]}
Part fields (millimetres):
- "type": "box" | "cylinder" | "cone" | "sphere" | "torus" | "text"
- box: "size":[x,y,z]
- cylinder: "radius","height" (axis along +z)
- cone: "radiusBottom","radiusTop","height"
- sphere: "radius"
- torus: "ringRadius","tubeRadius"
- text: "text","fontSize","thickness"
- "translate":[x,y,z] (default [0,0,0])
- "rotate":[x,y,z] degrees (default [0,0,0])
- "cut": true to subtract this part (for holes/hollows)

Conventions:
- Z is up. Build the model sitting on the plate (all z >= 0) and roughly centered on x,y.
- Primitives are centered at the origin BEFORE translate/rotate. A cylinder/cone of height h spans z from -h/2 to +h/2, so set translate z = h/2 to rest it on the plate.
- Total size under ~120 mm. Use 4 to 30 parts. Parts must overlap or touch so the result is ONE connected solid (critical for printing). Use "cut" for holes.
- Prefer a clearly recognizable, printable approximation built from these primitives.
Output ONLY the JSON object.`;

export interface RecipeResult {
  recipe: Recipe;
  model: string;
}

export function hasOpenRouter(): boolean {
  return !!process.env.OPENROUTER_API_KEY;
}

export async function promptToRecipe(prompt: string, timeoutMs = 120_000): Promise<RecipeResult> {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("OPENROUTER_API_KEY not set");
  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;

  // First try with JSON mode; if the model rejects it (400), retry without.
  let content = await callModel(key, model, prompt, true, timeoutMs).catch(async (e) => {
    if (String(e?.message).includes("400")) return callModel(key, model, prompt, false, timeoutMs);
    throw e;
  });

  const recipe = parseRecipe(content);
  return { recipe, model };
}

async function callModel(
  key: string,
  model: string,
  prompt: string,
  jsonMode: boolean,
  timeoutMs: number,
  attempt = 0
): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const body: any = {
      model,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 4000,
    };
    if (jsonMode) body.response_format = { type: "json_object" };

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "X-Title": "Printly",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (res.status === 429 && attempt < 1) {
      await new Promise((r) => setTimeout(r, 4000));
      return callModel(key, model, prompt, jsonMode, timeoutMs, attempt + 1);
    }
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(`OpenRouter ${res.status}: ${t.slice(0, 160)}`);
    }
    const data: any = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content || typeof content !== "string") throw new Error("empty model response");
    return content;
  } finally {
    clearTimeout(timer);
  }
}

/** Extract a Recipe from possibly-fenced / prose-wrapped model output. */
function parseRecipe(content: string): Recipe {
  let s = content.trim();
  // strip ```json ... ``` fences
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  // isolate the outermost JSON object
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start >= 0 && end > start) s = s.slice(start, end + 1);
  let obj: any;
  try {
    obj = JSON.parse(s);
  } catch {
    throw new Error("model output was not valid JSON");
  }
  if (!isRecipe(obj)) throw new Error("model output was not a valid recipe");
  return obj;
}
