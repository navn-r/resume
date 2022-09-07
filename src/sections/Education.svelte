<script lang="ts">
  import type { Resume } from 'src/resume.schema';
  import { formatDate } from '../utils';

  export let education: Resume.IEducation[];
</script>

<section>
  {#each education as school}
    <div>
      <p>
        <a href={school.url}><h4>{school.institution}</h4></a>
        <span>{school.location}</span>
      </p>
      <p>
        <span>{school.studyType}, {school.area}</span>
        <span>{formatDate(school.endDate)} (Expected)</span>
      </p>
    </div>
    <p>
      <strong>Cumulative GPA:</strong>
      {school.score} — {school.awards.join(', ')}
    </p>
    <p>
      <strong>Teaching Assistant:</strong>
      {school.courses.join(', ')}
    </p>
  {/each}
</section>

<style lang="scss">
  div {
    display: grid;

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
  }
</style>
