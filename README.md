# Resume
> Microsoft Word was too bloated

Built with:  
  - Web Components using `lit-element` + TypeScript  
  - Puppeteer for automagically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf))  
  - TravisCI for automated build and deployment on push `develop`
  - :heart:
  
## Get Started

### Install Dependencies
```bash
npm ci
```

### Development
```
npm run build:watch   # watches && compiles ts files
npm run serve         # serves static (should be done on another shell instance/tab)
```

### Deployment
```
mkdir -p docs && cp style.css docs/style.css && cp index.html docs/index.html
sed -i '7s@.*@    <script src="app-resume.bundled.js"></script>@' docs/index.html
npm run deploy
```

### Printing to PDF (optional)  
> Follow **Deployment** before proceding
```
npm run print:pdf
```  

We use `ts-node` to run the print script since `node.js` scripts wouldn't work on TravisCI, if you would like to use `node.js` ...  
  1. Remove the `ts-lint` comments in [`print.ts`](https://github.com/navn-r/resume/blob/develop/print.ts) and rename it to `print.js`  
  2. Replace the `print:pdf` script in [`package.json`](https://github.com/navn-r/resume/blob/develop/package.json) with    
  ```json
  "print:pdf": "rm -rf ./docs/RavindaranNavinn_Resume.pdf && node print.js",
  ```
