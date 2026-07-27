import { generateModel } from "../src/stl/generate.js";
import { writeFileSync } from "node:fs";
const specs: any = [["keychain",{shape:"keychain",text:"PRINTLY"}],["coin",{shape:"coin",text:"OKX"}],["nameplate",{shape:"nameplate",text:"MAKER"}]];
for (const [f, spec] of specs){ writeFileSync(`/tmp/mr/${f}.stl`, generateModel(spec).stl); }
console.log("templates written");
