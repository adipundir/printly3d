// Generates Printly brand assets (logo, favicon, OG image) from inline SVG using sharp.
// Run: node scripts/brand.mjs   -> writes PNGs into public/
import sharp from "sharp";
import { mkdirSync } from "node:fs";

mkdirSync("public", { recursive: true });

// --- shared cube mark (isometric 3D-print cube with layer lines) ---
// centered at (0,0), radius R; returns SVG group markup
function cube(R, opts = {}) {
  const c = Math.cos(Math.PI / 6) * R; // 0.866 R
  const h = R / 2;
  const top = `M0,${-R} L${c},${-h} L0,0 L${-c},${-h} Z`;
  const right = `M${c},${-h} L${c},${h} L0,${R} L0,0 Z`;
  const left = `M${-c},${-h} L0,0 L0,${R} L${-c},${h} Z`;
  // layer lines on the top face
  const layers = [0.66, 0.33]
    .map((t) => {
      const x1 = -c * t, y1 = -R + (R - h) * t;
      const x2 = c * t, y2 = -R + (R - h) * t;
      const midY = y1 + (0 - y1) * 0.5; // not used; keep straight
      return `M${x1.toFixed(1)},${y1.toFixed(1)} L0,${(y1 + (0 - y1) * 0.0).toFixed(1)} `;
    })
    .join("");
  return `
    <g stroke="#0b0f17" stroke-width="${R * 0.045}" stroke-linejoin="round">
      <path d="${top}" fill="url(#gTop)"/>
      <path d="${right}" fill="url(#gRight)"/>
      <path d="${left}" fill="url(#gLeft)"/>
    </g>
    <g stroke="#ffffff" stroke-opacity="0.35" stroke-width="${R * 0.03}" fill="none" stroke-linecap="round">
      <path d="M${(-c * 0.6).toFixed(1)},${(-R * 0.7).toFixed(1)} L${(c * 0.6).toFixed(1)},${(-R * 0.7).toFixed(1)}"/>
      <path d="M${(-c * 0.3).toFixed(1)},${(-R * 0.85).toFixed(1)} L${(c * 0.3).toFixed(1)},${(-R * 0.85).toFixed(1)}"/>
    </g>`;
}

const defs = `
  <defs>
    <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="gRight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#4338ca"/>
    </linearGradient>
    <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#5b21b6"/>
    </linearGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#141a24"/><stop offset="1" stop-color="#0b0f17"/>
    </linearGradient>
  </defs>`;

// --- icon (square, for avatar + apple-touch + favicon) ---
const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  ${defs}
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <g transform="translate(256,248)">${cube(150)}</g>
</svg>`;

// --- OG image (1200x630) ---
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${defs}
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(270,315)">${cube(165)}</g>
  <g font-family="Helvetica, Arial, sans-serif" fill="#ffffff">
    <text x="510" y="280" font-size="92" font-weight="700">Printly</text>
    <text x="512" y="345" font-size="37" fill="#a5b0c2" font-weight="400">Prompt &#8594; printable 3D model</text>
    <text x="512" y="398" font-size="26" fill="#8b93a7">AI-designed STL &#183; 3D preview &#183; pay on X Layer</text>
  </g>
</svg>`;

async function main() {
  await sharp(Buffer.from(icon(512))).png().toFile("public/icon.png");
  await sharp(Buffer.from(icon(180))).png().toFile("public/apple-touch-icon.png");
  await sharp(Buffer.from(icon(32))).png().toFile("public/favicon.png");
  await sharp(Buffer.from(og)).png().toFile("public/og.png");
  console.log("brand assets written: public/{icon,apple-touch-icon,favicon,og}.png");
}
main();
