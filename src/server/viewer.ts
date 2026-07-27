import type { PrintEstimate } from "../stl/estimate.js";
import { PRINT_HANDOFF_URL } from "../stl/config.js";

interface ViewerData {
  title: string;
  subtitle: string;
  /** query string for the STL route, e.g. "r=<gz>" (AI) or "s=<spec>" (template) */
  stlQuery: string;
  dims: { x: number; y: number; z: number };
  estimate: PrintEstimate;
}

/** Self-contained HTML page: shows the STL in 3D, with download + external print handoff. */
export function viewerPage(d: ViewerData): string {
  const title = d.title;
  const dims = `${d.dims.x.toFixed(1)} × ${d.dims.y.toFixed(1)} × ${d.dims.z.toFixed(1)} mm`;
  const stlPath = `/stl?${d.stlQuery}`;
  const dlPath = `${stlPath}&dl=1`;
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<style>
  :root{color-scheme:dark}
  *{box-sizing:border-box}
  body{margin:0;font:15px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#0e1116;color:#e6e9ef}
  header{padding:16px 20px;border-bottom:1px solid #232936;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
  header h1{font-size:16px;margin:0;font-weight:600}
  .tag{font-size:12px;color:#8b93a7;border:1px solid #2a3240;border-radius:999px;padding:2px 10px}
  #stage{width:100%;height:60vh;min-height:340px;display:block;background:radial-gradient(circle at 50% 30%,#182030,#0e1116)}
  .panel{max-width:820px;margin:0 auto;padding:18px 20px}
  .facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:12px 0}
  .fact{background:#151a22;border:1px solid #232936;border-radius:10px;padding:12px}
  .fact .k{font-size:12px;color:#8b93a7}
  .fact .v{font-size:18px;font-weight:600;margin-top:2px}
  .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:14px}
  a.btn{display:inline-block;text-decoration:none;padding:11px 18px;border-radius:10px;font-weight:600}
  a.primary{background:#4f8cff;color:#fff}
  a.ghost{background:#151a22;color:#e6e9ef;border:1px solid #2a3240}
  .note{font-size:12px;color:#8b93a7;margin-top:14px}
  .err{color:#ff8b8b;padding:16px 20px}
</style>
<script type="importmap">
{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js","three/addons/":"https://unpkg.com/three@0.160.0/examples/jsm/"}}
</script>
</head><body>
<header>
  <h1>${esc(d.title)}</h1>
  <span class="tag">${esc(d.subtitle)}</span>
  <span class="tag">${dims}</span>
</header>
<canvas id="stage"></canvas>
<div class="panel">
  <div class="facts">
    <div class="fact"><div class="k">Size</div><div class="v">${dims}</div></div>
    <div class="fact"><div class="k">Est. material</div><div class="v">${d.estimate.grams} g</div></div>
    <div class="fact"><div class="k">Est. print time</div><div class="v">${d.estimate.printMinutes} min</div></div>
    <div class="fact"><div class="k">Est. print cost</div><div class="v">$${d.estimate.priceUsd.toFixed(2)}</div></div>
  </div>
  <div class="actions">
    <a class="btn primary" href="${dlPath}">Download STL</a>
    <a class="btn ghost" href="${esc(PRINT_HANDOFF_URL)}" target="_blank" rel="noopener noreferrer">Order a print →</a>
  </div>
  <p class="note">Estimate: ${esc(d.estimate.assumptions)}. "Order a print" opens an external print service — payment and shipping are handled there, not here.</p>
</div>
<script type="module">
  import * as THREE from 'three';
  import { STLLoader } from 'three/addons/loaders/STLLoader.js';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  const fail = (m) => document.body.insertAdjacentHTML('beforeend', '<p class="err">3D preview failed: ' + m + '. The STL download still works.</p>');
  window.addEventListener('error', (e) => fail(e.message || 'load error'));

  const canvas = document.getElementById('stage');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000);
  const controls = new OrbitControls(camera, canvas);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(1,1,2); scene.add(key);

  function resize(){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  new STLLoader().load('${stlPath}', (geo) => {
    geo.computeVertexNormals(); geo.center();
    const mat = new THREE.MeshStandardMaterial({ color: 0x8ab4ff, metalness: 0.1, roughness: 0.6 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI/2;
    scene.add(mesh);
    geo.computeBoundingSphere();
    const r = geo.boundingSphere.radius;
    camera.position.set(r*1.6, r*1.4, r*1.9);
    controls.target.set(0,0,0); controls.update();
    resize();
    (function loop(){ requestAnimationFrame(loop); mesh.rotation.z += 0.004; controls.update(); renderer.render(scene, camera); })();
  }, undefined, (e) => {
    document.body.insertAdjacentHTML('beforeend','<p class="err">Could not load model.</p>');
  });
  window.addEventListener('resize', resize);
</script>
</body></html>`;
}

function esc(s: string): string {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
