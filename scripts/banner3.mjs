// Printly X banner: better real models, evenly spaced, minimal text.
import sharp from "sharp";
const W = 1500, H = 500, EMBER = "#e0552b";
let dots = "";
for (let x = 30; x < W; x += 34) for (let y = 24; y < H; y += 34) dots += `<circle cx="${x}" cy="${y}" r="1.3" fill="#17150f" opacity="0.05"/>`;
function cube(R){const c=Math.cos(Math.PI/6)*R,h=R/2;return `<g stroke="#12100b" stroke-width="${R*0.05}" stroke-linejoin="round"><path d="M0,${-R} L${c},${-h} L0,0 L${-c},${-h} Z" fill="#e4ddcd"/><path d="M${c},${-h} L${c},${h} L0,${R} L0,0 Z" fill="#a89f8b"/><path d="M${-c},${-h} L0,0 L0,${R} L${-c},${h} Z" fill="#948b78"/></g><path d="M${-c*0.6},${-R*0.7} L${c*0.6},${-R*0.7}" stroke="${EMBER}" stroke-width="${R*0.06}" stroke-linecap="round"/>`;}
const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f3ec"/><stop offset="1" stop-color="#eee7d9"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#bg)"/>${dots}<g transform="translate(78,58)">${cube(22)}</g><text x="112" y="66" font-family="Georgia, serif" font-size="40" font-weight="700" fill="#17150f" letter-spacing="-1">Printly</text></svg>`;

// evenly spaced, recognizable models
const layout = [
  { name: "rocket", size: 300, cx: 205,  cy: 285 },
  { name: "vase",   size: 285, cx: 470,  cy: 290 },
  { name: "tree",   size: 320, cx: 735,  cy: 280 },
  { name: "pawn",   size: 285, cx: 1000, cy: 290 },
  { name: "bishop", size: 300, cx: 1275, cy: 290 },
];
const base = await sharp(Buffer.from(bg)).png().toBuffer();
const layers = [];
for (const m of layout) {
  const buf = await sharp(`/tmp/final/${m.name}.png`).resize(m.size, m.size, { fit: "contain", background: { r:0,g:0,b:0,alpha:0 } }).toBuffer();
  layers.push({ input: buf, left: Math.round(m.cx - m.size/2), top: Math.round(m.cy - m.size/2) });
}
await sharp(base).composite(layers).png().toFile("media/twitter-banner.png");
console.log("banner rebuilt");
