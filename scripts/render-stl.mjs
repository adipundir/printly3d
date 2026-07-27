import { chromium } from 'playwright';
const out=process.argv[2];
const b=await chromium.launch();const p=await b.newPage({viewport:{width:900,height:900},deviceScaleFactor:1});
await p.goto('http://localhost:8899/view.html',{waitUntil:'networkidle'});
await p.waitForFunction('window.__done===1',{timeout:15000}).catch(()=>{});
await p.waitForTimeout(800);await p.screenshot({path:out});await b.close();console.log('shot',out);
