import { promptToRecipe } from "../src/ai/openrouter.js";
import { generateFromRecipe } from "../src/stl/dsl.js";
import { writeFileSync } from "node:fs";
const prompts: [string,string][] = [
  ["vase","a smooth decorative vase"],
  ["pawn","a chess pawn"],
  ["mushroom","a mushroom"],
  ["diamond","a cut diamond gemstone"],
  ["lighthouse","a lighthouse"],
  ["robot","a cute little robot"],
  ["tree","a small pine tree"],
  ["bishop","a chess bishop piece"],
];
for (const [f,p] of prompts){
  try { const r=await promptToRecipe(p,60000); const m=generateFromRecipe(r.recipe); writeFileSync(`/tmp/mr2/${f}.stl`, m.stl); console.log(f, r.recipe.parts.length, "parts"); }
  catch(e:any){ console.log(f, "FAIL", e.message); }
}
