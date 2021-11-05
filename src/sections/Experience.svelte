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
    <ul>
      {#each work.highlights as highlight}
        <li>{@html highlight}</li>
      {/each}
    </ul>
  {/each}
</section>

<style lang="scss">
  p {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    font-size: 11pt;

    &:not(:first-child) {
      margin-top: 0.75rem;
    }
  }

  a {
    font-family: var(--serif);
    font-weight: bold;
  }
</style>
