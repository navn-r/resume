<script lang="ts">
  import type { Resume } from 'src/resume.schema';
  import { formatDate } from '../utils';

  export let education: Resume.IEducation[];
</script>

<section>
  {#each education as school}
    <div>
      <p>
        <span
          ><a href={school.url}>{school.institution}</a> | {school.studyType},
          {school.area}</span
        >
        <span>{formatDate(school.endDate)} (Expected)</span>
      </p>
    </div>
    <p>
      <strong>Teaching Assistant:</strong>
      {@html school.courses.join(', ')}
    </p>
  {/each}
</section>

<style lang="scss">
  div {
    display: grid;
    margin-bottom: 0.25rem;

    p {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      justify-content: space-between;

      &:first-child {
        font-size: var(--title);
      }
    }
  }

  a {
    font-family: var(--serif);
    font-weight: bold;
  }
</style>
