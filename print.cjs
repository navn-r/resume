const puppeteer = require('puppeteer');
const exiftool = require('node-exiftool');
const resume = require('./src/resume.json');
const ep = new exiftool.ExiftoolProcess();

const PORT = process.argv[2] === '--dev' ? '3000' : '5000';
const OUT = process.argv[2] === '--dev' ? 'public' : 'dist';

const buildKeywords = (data) => {
  const [first, ...rest] = data.basics.name.split(' ');
  const current = data.work[0];

  const front = [
    first,
    rest.join(' '),
    current.position,
    current.name,
    'NYC',
    data.basics.location.region,
  ];

  const skills = data.skills.flatMap((s) => s.keywords);

  return [...new Set([...front, ...skills])];
};

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'google-chrome',
    dumpio: true,
    headless: true,
    args: ['--font-render-hinting=none', '--lang=en-GB'],
    ignoreDefaultArgs: ['--disable-extensions'],
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 2560, height: 1440 });
  await page.goto(`http://localhost:${PORT}/resume/`, {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: `${OUT}/RavindaranNavinn_Resume.pdf`,
    printBackground: true,
    displayHeaderFooter: false,
    scale: 1,
  });

  await browser.close();

  await ep.open();

  await ep.writeMetadata(
    `${OUT}/RavindaranNavinn_Resume.pdf`,
    {
      all: '',
      Title: `${resume.basics.name} - Resume`,
      Subject: `${resume.work[0].position} Resume`,
      Author: resume.basics.name,
      Creator: 'Chromium (Puppeteer)',
      Producer: 'github.com/navn-r/resume',
      'Keywords+': buildKeywords(resume),
    },
    ['overwrite_original']
  );

  await ep.close();
})();
