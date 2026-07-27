import { chromium } from 'playwright';
const ROCKET='H4sIAAAAAAAAA62SPWvDMBBA_8vN1yArdkk0tnTqUHCzBRMUR41FbMlIZ0ga_N-LYohdbOohnQTHvXcfuisYWSkQ4CtZljtn85OinS90DQi1dORBbK9Alzok5ZdSm4NygODkQTceRIJQKH0sCETEEMhJ40tJCsSWIcMka_EvfNnjqzEdxb9wa9QdfbFEtroJusDG1iBYr0vGOh4t5vqJFoOBlhOKOQHv8XiMA1_DULC3Z0Dw-jskrDBGnk3UnO2aDbueKMsf4J_iBwUjnqxrfIC1Oab92qjZq_Tum9h9xDIEZ6mLrEOI_YuXz3jVmQC7R0D68fr-tgGEL2vo8_Zz4XILnZ-M8uGEJio8Z23W_gBvdjrxbAMAAA';
const MUG='H4sIAAAAAAAAA4WR3YqDMBCF3-VcD0uqjZvNY-xtkSVtpxpoVfID2y2--2KhqBiayzCcb745eaAzN4bGqb9cmH9usQFhMC546MMD4T48p_er7c7sQHDmbKOH3gtCy7ZpA3QlCMGZzl9NYOiDIEGlqEd6ByjVDJAJwH4FCL2LfkrbrvleKIR45Ne72EKkzFgUcrbYyS2gygLKGZAQUKsrjv0vCN7-TeNqupFknQgVH7m1S-1EeepzTfBDy44XebXNfOV2losvT1SVbUq9je9ETTjFAB1c5LEe_wFfkyklnAIAAA';
const shots = [
  ['landing','https://printly3d.vercel.app/'],
  ['keychain','https://printly3d.vercel.app/m?s=eyJzaGFwZSI6ImtleWNoYWluIiwidGV4dCI6IlBSSU5UTFkifQ'],
  ['rocket','https://printly3d.vercel.app/m?r='+ROCKET],
  ['mug','https://printly3d.vercel.app/m?r='+MUG],
  ['coin','https://printly3d.vercel.app/m?s=eyJzaGFwZSI6ImNvaW4iLCJ0ZXh0IjoiT0tYIn0'],
];
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:1440,height:900}, deviceScaleFactor:2 });
for (const [name,url] of shots){ await p.goto(url,{waitUntil:'networkidle',timeout:30000}); await p.waitForTimeout(4500); await p.screenshot({path:`media/shot-${name}.png`}); console.log(name,'done'); }
await b.close();
