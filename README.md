# Resume
> Microsoft Word was too bloated

Built with:  
  - Web Components using `lit-element` + TypeScript  
  - Puppeteer for automagically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf))  
  - TravisCI for automated build and deployment on push `develop`
  - :heart:

## Schema

This resume uses the schema from the [JSON Resume](https://jsonresume.org/schema/) initiative. As such, all information found in the resume is located in [`resume.json`](/src/resume.json). TypeScript models (interfaces) for each property in the Resume schema is located in [`models.ts`](/src/models.ts).

## Get Started

### Install Dependencies
```bash
npm ci
```

### Development
```
npm run build:watch   # watches && compiles ts files
npm run serve         # serves static (should be done on another shell instance/tab)
                      # dev server starts on http://localhost:8000/src
```

### Deployment
```
npm run deploy        # located at /docs
npm run clean:build   # removes the /out dir (optional)
```

### Printing to PDF (optional)  
> Follow **Deployment** before proceeding
```
npm run print:pdf
```  

We use `ts-node` to run the print script since `node.js` scripts wouldn't work on TravisCI, if you would like to use `node.js` ...  
  1. Remove the `ts-lint` comments in [`print.ts`](https://github.com/navn-r/resume/blob/develop/print.ts) and rename it to `print.js`  
  2. Replace the `print:pdf` script in [`package.json`](https://github.com/navn-r/resume/blob/develop/package.json) with    
  ```json
  "print:pdf": "rm -rf ./docs/RavindaranNavinn_Resume.pdf && node print.js",
  ```
