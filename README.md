# Resume
> Microsoft Word was too bloated

Built with:  
  - Web Components using `lit-element` + TypeScript  
  - Puppeteer for automagically generating a pdf on build (view [here](https://github.com/navn-r/resume/blob/master/RavindaranNavinn_Resume.pdf))  
  - TravisCI for automated build and deployment on push `develop`
  - :heart:

## Schema

This resume was inspired by the [JSON Resume](https://jsonresume.org/schema/) initiative. As such, all the data found in the resume is located in [`resume.json`](/assets/resume.json).  

My goal was to abstract all the personal resume data *outside* the main web code and into a reusable and easily customizable format. So if anyone wants to use the same resume style, they can just change the JSON.

##### Empty Schema Example
```json
{
  "about": {
    "firstName": "",
    "lastName": "",
    "contact": {
      "portfolio": "",
      "email": "",
      "linkedIn": "",
      "github": ""
    }
  },
  "skills": [],
  "education": [
    {
      "school": "",
      "degree": "",
      "location": "",
      "duration": "",
      "cgpa": "",
      "courses": [],
      "awards": []
    }
  ],
  "experience": [
    {
      "position": "",
      "employer": "",
      "location": "",
      "duration": "",
      "accomplishments": []
    }
  ],
  "projects": [
    {
      "name": "",
      "date": "",
      "shortDesc": "",
      "repoUrl": "",
      "demoUrl": "",
      "accomplishments": [],
      "features": [],
      "technology": []
    }
  ]
}
```
  
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
> Follow **Deployment** before proceding
```
npm run print:pdf
```  

We use `ts-node` to run the print script since `node.js` scripts wouldn't work on TravisCI, if you would like to use `node.js` ...  
  1. Remove the `ts-lint` comments in [`print.ts`](https://github.com/navn-r/resume/blob/develop/assets/print.ts) and rename it to `print.js`  
  2. Replace the `print:pdf` script in [`package.json`](https://github.com/navn-r/resume/blob/develop/package.json) with    
  ```json
  "print:pdf": "rm -rf ./docs/RavindaranNavinn_Resume.pdf && node print.js",
  ```
