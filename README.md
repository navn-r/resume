# Resume
> An over-engineered JSON resume, because Microsoft Word was too bloated.

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)[![Node.js CI](https://github.com/navn-r/resume/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/navn-r/resume/actions/workflows/main.yml)

Built with:  
  - Web Components using `lit` + TypeScript  
  - Puppeteer for automagically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf))  
  - GitHub Actions on push to Github Pages
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
yarn run dev           # dev server starts on http://localhost:8000/src
```

### Formatting with Prettier
> Husky pre-commit with linting and formatting
```sh
yarn run format        # formats /src
```

### Deployment
```sh
yarn run deploy        # located at /docs
yarn run clean         # removes /out and /docs (optional)
yarn run clean:build   # removes the /out dir (optional)
```

### Printing to PDF (optional)  
```sh
yarn run print:pdf     # located at /docs/RavindaranNavinn_Resume.pdf
yarn run build:pdf     # alt: runs deployment, then prints
```  
The printing script is located at [`print.ts`](https://github.com/navn-r/resume/blob/develop/print.ts)
