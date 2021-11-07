<script lang="ts">
  import type { Resume } from 'src/resume.schema';

  export let skills: Resume.ISkill[];
</script>

<section>
  {#each skills as skill}
    <strong>{skill.name}:</strong> {skill.keywords.join(', ')} <br />
  {/each}
</section>

<style lang="scss">
  section {
    line-height: 1.25rem;
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 0.5rem;

    strong {
      text-align: right;
    }
  }
</style>
