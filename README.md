# Resume

> An over-engineered JSON resume, because Microsoft Word was too bloated.

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) [![Node.js CI](https://github.com/navn-r/resume/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/navn-r/resume/actions/workflows/main.yml) [![CodeFactor](https://www.codefactor.io/repository/github/navn-r/resume/badge/develop)](https://www.codefactor.io/repository/github/navn-r/resume/overview/develop)

Built with:

- Web Components using `lit` + TypeScript
- Puppeteer for auto-magically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf))
- GitHub Actions on push to Github Pages
- :heart:

## Cover Letter

A cover letter template is located in [`letter.md`](/src/letter.md). The cover letter can be viewed with the `?letter=true` query param.

## Schema

This resume uses the schema from the [JSON Resume](https://jsonresume.org/schema/) initiative. As such, all information found in the resume is located in [`resume.json`](/src/resume.json). Types for each property in the Resume schema is located in [`types.d.ts`](/src/types.d.ts).

## Get Started

### Install Dependencies

```sh
yarn
```

### Development

```sh
yarn run dev           # dev server starts on http://localhost:8000/src
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
