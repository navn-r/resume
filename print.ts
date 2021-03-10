/* tslint:disable */
// @ts-nocheck

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ dumpio: true, headless: true, args: ['--font-render-hinting=none'] });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/docs/index.html`, { waitUntil: 'networkidle2' });
  await page.pdf({
    path: 'docs/RavindaranNavinn_Resume.pdf',
    format: 'Letter',
    printBackground: true,
    displayHeaderFooter: false,
    scale: 1,
  });
  await browser.close();
})();

/* tslint:enable */