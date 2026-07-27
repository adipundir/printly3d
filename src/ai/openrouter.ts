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

const SYSTEM = `You are a 3D modeller for 3D printing. Given an object description, design the OBJECT AS A REAL SHAPE by composing solid primitives, and output ONLY a JSON "recipe". No prose, no markdown fences.

JSON shape: {"name":"<short name>","parts":[Part,...]}
Part fields (millimetres):
- "type": "box" | "cylinder" | "cone" | "sphere" | "torus" | "text"
- box: "size":[x,y,z]
- cylinder: "radius","height" (axis along +z)
- cone: "radiusBottom","radiusTop","height"  (a nose/point = small radiusTop; a full point = radiusTop 0)
- sphere: "radius"
- torus: "ringRadius","tubeRadius"
- text: "text","fontSize","thickness"
- "translate":[x,y,z] (default [0,0,0])
- "rotate":[x,y,z] degrees (default [0,0,0])
- "cut": true to subtract this part (holes/hollows)

HARD RULES:
1. Build the actual 3D SHAPE of the object. NEVER spell the prompt words as 3D text. Only use "type":"text" when the user explicitly asks for letters, a name, a word, a keychain-with-text, a nameplate, or a sign.
2. Decompose the object into recognizable parts and place them by anatomy. Think about what the thing looks like and approximate it with these primitives.
3. Printability: the result must be ONE connected solid. Parts MUST overlap or touch (no floating gaps). Give it a flat, stable base sitting on the plate (all z >= 0). Avoid thin fragile spikes and tiny disconnected bits. Keep total size 30 to 120 mm.
4. Use 5 to 25 parts. Center it near x,y = 0. Primitives are centred at the origin before transform; a cylinder/cone of height h spans -h/2..+h/2 in z, so translate z by h/2 to rest on the plate.

Worked examples of GOOD decomposition (build shapes, not words):
- rocket: a cone nose (radiusTop 0) on top of a tall cylinder body; 3 or 4 thin boxes as fins around the base; a short wider cylinder as the tail. NO text.
- mug: a cylinder body, a slightly smaller cylinder cut from the top (hollow), a torus on the side as the handle.
- house: a box for walls, a wider short box or a 4-sided pyramid (cone with 4 segments feel) as the roof on top; small box door.
- car: a long low box chassis, a smaller box cabin on top, four short cylinders (rotated 90 on x) as wheels at the corners.
- tree: a cylinder trunk with 2 or 3 stacked spheres or cones as the foliage on top.

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
