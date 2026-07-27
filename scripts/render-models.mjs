import { chromium } from 'playwright';
import { copyFileSync } from 'node:fs';
const models=['rocket','mug','planter','keychain','coin','nameplate'];
const b=await chromium.launch();const p=await b.newPage({viewport:{width:700,height:700},deviceScaleFactor:2});
for(const m of models){
  copyFileSync(`/tmp/mr/${m}.stl`,`/tmp/mr/model.stl`);
  await p.goto('http://localhost:8866/view.html',{waitUntil:'networkidle'});
  await p.waitForFunction('window.__ready===1',{timeout:15000}).catch(()=>{});
  await p.waitForTimeout(400);
  await p.screenshot({path:`/tmp/mr/png/${m}.png`, omitBackground:true});
  console.log('rendered',m);
}
await b.close();
