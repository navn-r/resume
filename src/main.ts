import App from './App.svelte';
import resume from './resume.json';
import type { Resume } from './resume.schema';

const app = new App({
  target: document.getElementById('app'),
  props: { resume: resume as Resume.ISchema },
});

export default app;
