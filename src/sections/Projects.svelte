<script lang="ts">
  import type { Resume } from 'src/resume.schema';

  export let projects: Resume.IProject[];
</script>

<section>
  {#each projects as project}
    <p>
      <strong>{project.name}</strong>
      {#if project.url}
        <a href={project.url}>(<strong>{project.type}</strong>)</a>
      {/if}
      <a href={project.repo}>(<strong>GitHub</strong>)</a>
    </p>
    <ul>
      <li>{@html project.description}</li>
      {#if project.highlights}
        {#each project.highlights as highlight}
          <li>{@html highlight}</li>
        {/each}
      {/if}
      <li><strong>Technology:</strong> {project.technology.join(', ')}</li>
    </ul>
  {/each}
</section>

<style lang="scss">
  p {
    display: grid;
    grid-template-columns: auto max-content max-content;
    column-gap: 0.25rem;
    font-size: var(--title);

    & > strong {
      font-family: var(--serif);
    }

    &:not(:first-child) {
      margin-top: 0.75rem; // FIXME: 1rem;
    }
  }

  a strong {
    font-weight: 500;
  }
</style>
