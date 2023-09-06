<script lang="ts">
  import type { Resume } from 'src/resume.schema';
  import { formatDate } from '../utils';

  export let experience: Resume.IWork[];
</script>

<section>
  {#each experience as work}
    <p>
      <span><a href={work.url}>{work.name}</a> | {work.position}</span>
      <span>{formatDate(work.startDate)} — {formatDate(work.endDate)}</span>
    </p>
    {#if work.highlights.length > 0}
      <ul>
        {#each work.highlights as highlight}
          <li>{@html highlight}</li>
        {/each}
      </ul>
    {/if}
  {/each}
</section>

<style lang="scss">
  p {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    font-size: var(--title);

    &:not(:first-child) {
      margin-top: 0.75rem; // FIXME: 1rem;
    }
  }

  a {
    font-family: var(--serif);
    font-weight: bold;
  }
</style>
