// Generates Printly brand assets (logo, favicon, OG image) from inline SVG using sharp.
// Palette: warm paper + ink + a single ember accent (no purple/blue).
// Run: node scripts/brand.mjs   -> writes PNGs into public/
import sharp from "sharp";
import { mkdirSync } from "node:fs";

mkdirSync("public", { recursive: true });

const EMBER = "#e0552b";

// isometric 3D-print cube (warm-gray "PLA" faces + ember layer lines), centered at (0,0)
function cube(R) {
  const c = Math.cos(Math.PI / 6) * R;
  const h = R / 2;
  const top = `M0,${-R} L${c},${-h} L0,0 L${-c},${-h} Z`;
  const right = `M${c},${-h} L${c},${h} L0,${R} L0,0 Z`;
  const left = `M${-c},${-h} L0,0 L0,${R} L${-c},${h} Z`;
  return `
    <g stroke="#12100b" stroke-width="${R * 0.04}" stroke-linejoin="round">
      <path d="${top}" fill="url(#gTop)"/>
      <path d="${right}" fill="url(#gRight)"/>
      <path d="${left}" fill="url(#gLeft)"/>
    </g>
    <g stroke="${EMBER}" stroke-width="${R * 0.05}" fill="none" stroke-linecap="round">
      <path d="M${(-c * 0.62).toFixed(1)},${(-R * 0.69).toFixed(1)} L${(c * 0.62).toFixed(1)},${(-R * 0.69).toFixed(1)}"/>
      <path d="M${(-c * 0.32).toFixed(1)},${(-R * 0.84).toFixed(1)} L${(c * 0.32).toFixed(1)},${(-R * 0.84).toFixed(1)}"/>
    </g>`;
}

const defs = `
  <defs>
    <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#efe9db"/><stop offset="1" stop-color="#d6cfbd"/>
    </linearGradient>
    <linearGradient id="gRight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bcb4a0"/><stop offset="1" stop-color="#938b78"/>
    </linearGradient>
    <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a89f8b"/><stop offset="1" stop-color="#807868"/>
    </linearGradient>
  </defs>`;

// icon (dark warm square so the cube + ember pop) — favicon / apple-touch / OKX avatar.
// `rx` is the corner radius: 120 for our own favicons, but 0 for the OKX agent avatar —
// OKX rounds and crops the avatar itself, and rejects images with rounded corners baked in.
const icon = (size, rx = 120) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  ${defs}
  <rect width="512" height="512" rx="${rx}" fill="#1c1913"/>
  <g transform="translate(256,250)">${cube(150)}</g>
</svg>`;

// OG image (1200x630) — light paper to match the landing page
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${defs}
  <rect width="1200" height="630" fill="#f4f1ea"/>
  <g transform="translate(275,318)">${cube(168)}</g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#17150f">
    <text x="512" y="288" font-size="104" font-weight="700" letter-spacing="-2">Printly</text>
  </g>
  <g font-family="Helvetica, Arial, sans-serif">
    <text x="516" y="346" font-size="34" fill="#5c564a">Describe an object. Get a printable 3D model.</text>
    <rect x="516" y="386" width="34" height="6" rx="3" fill="${EMBER}"/>
    <text x="562" y="399" font-size="24" fill="#8a8271" font-family="'Courier New', monospace">AI &#8594; STL &#183; 3D preview &#183; X Layer</text>
  </g>
</svg>`;

async function main() {
  await sharp(Buffer.from(icon(512))).png().toFile("public/icon.png");
  await sharp(Buffer.from(icon(180))).png().toFile("public/apple-touch-icon.png");
  await sharp(Buffer.from(icon(32))).png().toFile("public/favicon.png");
  await sharp(Buffer.from(og)).png().toFile("public/og.png");
  // OKX agent avatar: exactly 440x440, square corners, rendered at target size (not
  // downscaled) so it stays sharp. Rounded corners are rejected in listing review.
  await sharp(Buffer.from(icon(440, 0)))
    .png({ compressionLevel: 9 })
    .toFile("public/agent-avatar.png");
  console.log(
    "brand assets written: public/{icon,apple-touch-icon,favicon,og,agent-avatar}.png"
  );
}
main();
