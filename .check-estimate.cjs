const { chromium } = require('C:/Users/new/Desktop/ag/reviews/node_modules/playwright-core');
const http = require('http'); const fs = require('fs'); const path = require('path');
(async()=>{
 const server=http.createServer((req,res)=>{const file=path.join(process.cwd(),decodeURIComponent(req.url.split('?')[0]==='/'?'/index.html':req.url.split('?')[0]));try{res.setHeader('Content-Type',file.endsWith('.js')?'application/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(fs.readFileSync(file))}catch{res.statusCode=404;res.end()}}).listen(0,'127.0.0.1');
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:390,height:844}}); page.on('pageerror',e=>console.log('ERROR',e.message));
 await page.route('**/*',r=>r.request().url().startsWith('http://127.0.0.1')?r.continue():r.abort());
 await page.goto('http://127.0.0.1:'+server.address().port); await page.waitForTimeout(3600);
 console.log('before',await page.locator('.step-heading').innerText());
 await page.locator('#mobileEstimateButton').click(); await page.waitForTimeout(600);
 console.log('after',await page.locator('.step-heading').innerText());
 await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
