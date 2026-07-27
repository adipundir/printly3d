import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1440,height:900}, deviceScaleFactor:2 });
await p.goto('https://printly3d.vercel.app/',{waitUntil:'networkidle',timeout:30000});
await p.waitForTimeout(5000);
await p.screenshot({path:'media/landing-full.png', fullPage:true});
await p.screenshot({path:'media/landing-hero.png'});
// also mobile
const m = await b.newPage({ viewport:{width:390,height:844}, deviceScaleFactor:2 });
await m.goto('https://printly3d.vercel.app/',{waitUntil:'networkidle',timeout:30000});
await m.waitForTimeout(5000);
await m.screenshot({path:'media/landing-mobile.png', fullPage:true});
await b.close();
console.log('done');
