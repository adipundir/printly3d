import { generateModel } from "../src/stl/generate.js";
import { writeFileSync } from "node:fs";

const out = "/private/tmp/claude-501/-Users-adityapundir-Documents-Projects-okx/0b56f9bc-1765-4b6c-b10d-358eced852c9/scratchpad";

for (const shape of ["keychain", "nameplate", "coin"] as const) {
  const m = generateModel({ shape, text: "ADITYA" });
  const path = `${out}/test-${shape}.stl`;
  writeFileSync(path, m.stl);
  // binary STL: bytes 80..84 = uint32 facet count
  const facets = m.stl.readUInt32LE(80);
  console.log(
    `${shape}: ${m.stl.length} bytes, ${facets} facets, ` +
      `bbox ${m.bbox.x.toFixed(1)}x${m.bbox.y.toFixed(1)}x${m.bbox.z.toFixed(1)}mm, ` +
      `vol ${m.volumeMm3.toFixed(0)}mm3 -> ${path}`
  );
}
