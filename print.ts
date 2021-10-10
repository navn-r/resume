const puppeteer = require('puppeteer');
const exiftool = require('node-exiftool');
const ep = new exiftool.ExiftoolProcess();

(async () => {
  const browser = await puppeteer.launch({
    dumpio: true,
    headless: true,
    args: ['--font-render-hinting=none', '--lang=en-GB'],
  });
  const page = await browser.newPage();

  await page.goto(`file://${__dirname}/docs/index.html`, {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: 'docs/RavindaranNavinn_Resume.pdf',
    printBackground: true,
    displayHeaderFooter: false,
    scale: 1,
  });

  await browser.close();

  await ep.open();

  await ep.writeMetadata(
    'docs/RavindaranNavinn_Resume.pdf',
    {
      all: '', // remove existing tags
      Title: 'Navinn Ravindaran - Resume',
      Subject: 'Resume',
      Author: 'Navinn Ravindaran',
      Creator: 'Chromium (Puppeteer)',
      Producer: 'github.com/navn-r/resume',
      'Keywords+': [
        'Navinn',
        'Ravindaran',
        'Resume',
        'Canada',
        'Computer Science',
        'SWE',
        'Software Engineering',
        'Developer',
        'Student',
        'Coder',
        'Full Stack',
        'Frontend',
        'Backend',
      ],
    },
    ['overwrite_original']
  );

  await ep.close();
})();
