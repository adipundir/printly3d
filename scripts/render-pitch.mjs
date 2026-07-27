import { chromium } from 'playwright';
const mode=process.argv[2]||'samples', fps=30, total=71.0;
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
await p.goto('http://localhost:8833/index.html',{waitUntil:'networkidle'});
await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(1000);
const pad=n=>String(n).padStart(5,'0'); const dir='videos/printly-promo/pitch';
if(mode==='samples'){ for(const t of [4,22,34,46,58,67]){ await p.evaluate(t=>window.__seek(t),t); await p.waitForTimeout(40); await p.screenshot({path:`/tmp/pt-t${t}.png`});} console.log('samples'); }
else { const N=Math.ceil(total*fps); for(let f=0;f<=N;f++){ const t=f/fps; await p.evaluate(t=>window.__seek(t),t); await p.screenshot({path:`${dir}/frames/f-${pad(f)}.png`});} console.log('rendered',N+1); }
await b.close();
