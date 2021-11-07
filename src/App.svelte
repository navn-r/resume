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
  <img src="./qr.png" alt="QR Code for PDF link" />
  <a href="./RavindaranNavinn_Resume.pdf" target="__blank"
    >Download PDF <i class="fas fa-download" /></a
  >
</div>

<main in:fade={{ delay: 250, duration: 300 }}>
  <Header basics={resume.basics} />

  <h3><span>EDUCATION</span></h3>
  <Education education={resume.education} />

  <h3><span>SKILLS</span></h3>
  <Skills skills={resume.skills} />

  <h3><span>EXPERIENCE</span></h3>
  <Experience experience={resume.work} />

  <h3><span>PROJECTS</span></h3>
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
    font-size: var(--title);
    font-weight: 400;

    border-bottom: 1px solid var(--gray);
    line-height: 0rem;
    margin: 1.625rem 0 1.25rem;

    span {
      background-color: var(--bg);
      padding-right: 0.5rem;
    }
  }

  div {
    margin: 0 auto;
    max-width: 8.5in;
    padding: 1rem 0;

    a {
      color: var(--bg);
    }

    img {
      display: none;
    }
  }

  @media screen and (min-width: 8.5in) {
    main {
      width: 8.5in;
      height: 11in;
      margin: 0 auto;
    }

    div {
      text-align: right;
    }
  }

  @media screen and (max-width: 8.5in) {
    main {
      display: none;
    }

    div {
      height: 100vh;
      width: 80%;

      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      justify-content: center;
      align-items: center;

      img {
        display: initial;
        max-width: 250px;
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
