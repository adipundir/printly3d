import { chromium } from 'playwright';
import { copyFileSync } from 'node:fs';
const models=['vase','pawn','mushroom','diamond','lighthouse','robot','tree','bishop'];
const b=await chromium.launch();const p=await b.newPage({viewport:{width:700,height:700},deviceScaleFactor:2});
for(const m of models){ copyFileSync(`/tmp/mr2/${m}.stl`,`/tmp/mr2/model.stl`); await p.goto('http://localhost:8844/view.html',{waitUntil:'networkidle'}); await p.waitForFunction('window.__ready===1',{timeout:15000}).catch(()=>{}); await p.waitForTimeout(350); await p.screenshot({path:`/tmp/mr2/png/${m}.png`,omitBackground:true}); }
await b.close(); console.log('done');
