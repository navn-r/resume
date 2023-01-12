const puppeteer = require('puppeteer');
const exiftool = require('node-exiftool');
const ep = new exiftool.ExiftoolProcess();

const PORT = process.argv[2] === '--dev' ? '3000' : '5000';
const OUT = process.argv[2] === '--dev' ? 'public' : 'dist';

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
        'Data Structures',
        'Algorithms',
      ],
    },
    ['overwrite_original']
  );

  await ep.close();
})();
