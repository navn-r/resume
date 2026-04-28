<script lang="ts">
  import type { Resume } from 'src/resume.schema';
  import { isPresent, formatDate } from '../utils';

  export let experience: Resume.IWork[];
</script>

<section>
  {#each experience as work}
    <div class="title-container">
      <span><a href={work.url}>{work.name}</a></span>
      <span class="right">{work.location}</span>
      <span>{work.position}</span>
      <span class="right"
        >{formatDate(work.startDate)} — {isPresent(work.endDate)
          ? 'Present'
          : formatDate(work.endDate)}</span
      >
    </div>
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
  .title-container {
    display: grid;
    grid-template-columns: 1fr auto;
    row-gap: 0.125rem;
    font-size: var(--title);

    &:not(:first-child) {
      margin-top: 0.75rem;
    }

    .right {
      text-align: right;
    }

    span:nth-child(3),
    span:nth-child(4) {
      font-size: var(--normal);
    }
  }

  a {
    font-family: var(--serif);
    font-weight: bold;
  }
</style>
