# Resume
> An over-engineered JSON resume, because Microsoft Word was too bloated.

Built with:  
  - Web Components using `lit-element` + TypeScript  
  - Puppeteer for automagically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf))  
  - TravisCI for automated build and deployment on push `develop`
  - :heart:

## Schema

This resume uses the schema from the [JSON Resume](https://jsonresume.org/schema/) initiative. As such, all information found in the resume is located in [`resume.json`](/src/resume.json). TypeScript models (interfaces) for each property in the Resume schema is located in [`models.ts`](/src/models.ts).

## Get Started

### Install Dependencies
```sh
yarn
```

### Development
```sh
npm run dev           # dev server starts on http://localhost:8000/src
```

### Formatting with Prettier
```sh
npm run format        # formats /src
```

### Deployment
```sh
npm run deploy        # located at /docs
npm run clean         # removes /out and /docs (optional)
npm run clean:build   # removes the /out dir (optional)
```

### Printing to PDF (optional)  
```sh
npm run print:pdf     # located at /docs/RavindaranNavinn_Resume.pdf
npm run build:pdf     # alt: runs deployment, then prints
```  
The printing script is located at [`print.ts`](https://github.com/navn-r/resume/blob/develop/print.ts)