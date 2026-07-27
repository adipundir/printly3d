import { chromium } from 'playwright';
const mode=process.argv[2]||'samples', fps=30, total=37.4;
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
await p.goto('http://localhost:8877/index.html',{waitUntil:'networkidle'});
await p.evaluate(()=>document.fonts.ready);
await p.waitForFunction('window.__stlReady===1',{timeout:15000}).catch(()=>{});
await p.waitForTimeout(600);
const pad=n=>String(n).padStart(5,'0');
const dir='videos/printly-promo/realdemo';
if(mode==='samples'){ for(const t of [4,15,21,27,34]){ await p.evaluate(t=>window.__seek(t),t); await p.waitForTimeout(40); await p.screenshot({path:`/tmp/rd-t${t}.png`});} console.log('samples done'); }
else { const N=Math.ceil(total*fps); for(let f=0;f<=N;f++){ const t=f/fps; await p.evaluate(t=>window.__seek(t),t); await p.screenshot({path:`${dir}/frames/f-${pad(f)}.png`});} console.log('rendered',N+1); }
await b.close();
