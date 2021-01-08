'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ dumpio: true, headless: true, args: ['--font-render-hinting=none'] });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/docs/index.html`, { waitUntil: 'networkidle2' });
  await page.pdf({
    path: 'docs/RavindaranNavinn_Resume.pdf',
    format: 'Letter',
    printBackground: true,
    displayHeaderFooter: false,
    scale: 0.81,
  });
  await browser.close();
})();
