// Generates the Printly X/Twitter banner (1500x500) matching the brand.
// Run: node scripts/banner.mjs  -> media/twitter-banner.png
import sharp from "sharp";
import { mkdirSync } from "node:fs";
mkdirSync("media", { recursive: true });

const EMBER = "#e0552b";

// isometric print cube (warm-gray faces + ember layer lines), centred at (0,0)
function cube(R) {
  const c = Math.cos(Math.PI / 6) * R, h = R / 2;
  const top = `M0,${-R} L${c},${-h} L0,0 L${-c},${-h} Z`;
  const right = `M${c},${-h} L${c},${h} L0,${R} L0,0 Z`;
  const left = `M${-c},${-h} L0,0 L0,${R} L${-c},${h} Z`;
  return `
    <g stroke="#12100b" stroke-width="${R * 0.04}" stroke-linejoin="round">
      <path d="${top}" fill="url(#gTop)"/><path d="${right}" fill="url(#gRight)"/><path d="${left}" fill="url(#gLeft)"/>
    </g>
    <g stroke="${EMBER}" stroke-width="${R * 0.05}" fill="none" stroke-linecap="round">
      <path d="M${(-c*0.62).toFixed(1)},${(-R*0.69).toFixed(1)} L${(c*0.62).toFixed(1)},${(-R*0.69).toFixed(1)}"/>
      <path d="M${(-c*0.32).toFixed(1)},${(-R*0.84).toFixed(1)} L${(c*0.32).toFixed(1)},${(-R*0.84).toFixed(1)}"/>
    </g>`;
}

// dot grid
let dots = "";
for (let x = 30; x < 1500; x += 34) for (let y = 24; y < 500; y += 34) dots += `<circle cx="${x}" cy="${y}" r="1.3" fill="#17150f" opacity="0.05"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500" viewBox="0 0 1500 500">
  <defs>
    <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#efe9db"/><stop offset="1" stop-color="#d6cfbd"/></linearGradient>
    <linearGradient id="gRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcb4a0"/><stop offset="1" stop-color="#938b78"/></linearGradient>
    <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a89f8b"/><stop offset="1" stop-color="#807868"/></linearGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f3ec"/><stop offset="1" stop-color="#efe9db"/></linearGradient>
  </defs>
  <rect width="1500" height="500" fill="url(#bg)"/>
  ${dots}

  <!-- print cube, upper-centre-left (clear of the avatar in the lower-left) -->
  <g transform="translate(430,215)">${cube(120)}</g>

  <!-- wordmark + tagline, centre-right -->
  <g font-family="Georgia, 'Times New Roman', serif" fill="#17150f">
    <text x="640" y="205" font-size="132" font-weight="700" letter-spacing="-3">Printly</text>
  </g>
  <g font-family="Helvetica, Arial, sans-serif">
    <text x="644" y="270" font-size="40" fill="#5c564a">Describe an object. Get a printable 3D model.</text>
    <rect x="644" y="312" width="40" height="7" rx="3.5" fill="${EMBER}"/>
    <text x="700" y="327" font-size="27" fill="#8a8271" font-family="'Courier New', monospace">OKX.AI Agent #9855 · x402 · USD&#8366;0 on X Layer</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("media/twitter-banner.png");
console.log("wrote media/twitter-banner.png (1500x500)");
