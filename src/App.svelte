<script lang="ts">
  import { fade } from 'svelte/transition';

  import Education from './sections/Education.svelte';
  import Experience from './sections/Experience.svelte';
  import Header from './sections/Header.svelte';
  import Skills from './sections/Skills.svelte';

  import type { Resume } from './resume.schema';
  import Projects from './sections/Projects.svelte';

  export let resume: Resume.ISchema;
</script>

<div in:fade={{ delay: 250, duration: 300 }}>
  <a href="./RavindaranNavinn_Resume.pdf" target="__blank"
    >Download PDF <i class="fas fa-download" /></a
  >
</div>

<main in:fade={{ delay: 250, duration: 300 }}>
  <Header basics={resume.basics} />

  <h3>EDUCATION</h3>
  <Education education={resume.education} />

  <h3>SKILLS</h3>
  <Skills skills={resume.skills} />

  <h3>EXPERIENCE</h3>
  <Experience experience={resume.work} />

  <h3>PROJECTS</h3>
  <Projects projects={resume.projects} />
</main>

<style lang="scss">
  /* Global Styles */

  :root {
    --sans: 'IBM Plex Sans', 'sans-serif';
    --serif: 'IBM Plex Serif', 'serif';

    --wrapper: #131516;
    --white: #ffffff;
    --blue: #423b6d;
    --gray: #ababab;
    --black: #252525;

    --bg: var(--white);
    --text: var(--black);

    // 1rem == 12pt == 16px
    --normal: #{calc(10pt / 12pt)}rem;
    --title: #{calc(11pt / 12pt)}rem;
  }

  :global(::selection) {
    background-color: var(--gray);
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-variant-ligatures: none;
  }

  :global(body) {
    background-color: var(--wrapper);
  }

  :global(#app) {
    width: 100%;
    color: var(--text);
    font-family: var(--sans);
  }

  :global(a) {
    text-decoration: none;
    outline: none;
    color: var(--text);
    border: 0;

    &:hover {
      background: rgba(255, 255, 0, 0.2) !important;
      box-shadow: 0 2px 10px rgba(255, 255, 0, 0.2) !important;
    }
  }

  :global(ul) {
    margin-top: 0.25rem;
  }

  :global(li) {
    margin-left: 1rem;

    &:not(:first-child) {
      margin-top: 0.125rem;
    }
  }

  /** Resume Styles */

  main {
    background-color: var(--bg);
    font-size: var(--normal);
    padding: 2rem;
  }

  h3 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: var(--title);
    border-bottom: 1px solid var(--gray);
    margin: 1rem 0 0.75rem;
  }

  @media screen and (min-width: 8.5in) {
    main {
      width: 8.5in;
      height: 11in;
      margin: 0 auto;
    }

    div {
      width: 8.5in;
      margin: 0 auto;
      padding: 1rem 0;
      text-align: right;

      a {
        color: var(--bg);
      }
    }
  }

  /** Print Format Styles */

  @media print {
    main {
      height: 100vh;
    }
    div {
      display: none;
    }

    :global(li::marker) {
      font-size: 0.75rem;
    }
  }
</style>
