// Artistic Printly banner: a row of real AI-generated printable models, minimal text.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
mkdirSync("media", { recursive: true });
const W = 1500, H = 500, EMBER = "#e0552b";

let dots = "";
for (let x = 30; x < W; x += 34) for (let y = 24; y < H; y += 34) dots += `<circle cx="${x}" cy="${y}" r="1.3" fill="#17150f" opacity="0.05"/>`;

// small brand mark (cube + wordmark), top-left, subtle
function cube(R) {
  const c = Math.cos(Math.PI/6)*R, h = R/2;
  return `<g stroke="#12100b" stroke-width="${R*0.05}" stroke-linejoin="round">
    <path d="M0,${-R} L${c},${-h} L0,0 L${-c},${-h} Z" fill="#e4ddcd"/>
    <path d="M${c},${-h} L${c},${h} L0,${R} L0,0 Z" fill="#a89f8b"/>
    <path d="M${-c},${-h} L0,0 L0,${R} L${-c},${h} Z" fill="#948b78"/></g>
    <path d="M${-c*0.6},${-R*0.7} L${c*0.6},${-R*0.7}" stroke="${EMBER}" stroke-width="${R*0.06}" stroke-linecap="round"/>`;
}

const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f3ec"/><stop offset="1" stop-color="#eee7d9"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>${dots}
  <g transform="translate(78,58)">${cube(22)}</g>
  <text x="112" y="66" font-family="Georgia, serif" font-size="40" font-weight="700" fill="#17150f" letter-spacing="-1">Printly</text>
</svg>`;

// real models in a balanced, even row across the full width (a "shelf" of prints)
const layout = [
  { name: "keychain", size: 340, left: 60,   top: 110 },
  { name: "planter",  size: 340, left: 360,  top: 135 },
  { name: "mug",      size: 300, left: 660,  top: 150 },
  { name: "rocket",   size: 380, left: 910,  top: 80 },
  { name: "coin",     size: 320, left: 1190, top: 140 },
];

const base = await sharp(Buffer.from(bg)).png().toBuffer();
const layers = [];
for (const m of layout) {
  const buf = await sharp(`/tmp/mr/png/${m.name}.png`).resize(m.size, m.size, { fit: "contain", background: { r:0,g:0,b:0,alpha:0 } }).toBuffer();
  layers.push({ input: buf, left: Math.round(m.left), top: Math.round(m.top) });
}
await sharp(base).composite(layers).png().toFile("media/twitter-banner.png");
console.log("wrote media/twitter-banner.png (1500x500)");
