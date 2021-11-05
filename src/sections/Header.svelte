<script lang="ts">
  import type { Resume } from 'src/resume.schema';

  export let basics: Resume.IBasics;
</script>

<section>
  <h1>{basics.name}</h1>
  <div class="contacts">
    <div class="contact">
      <i class="fas fa-inbox" />
      <a href="mailto:{basics.email}">{basics.email}</a>
    </div>
    <div class="lower">
      <div class="contact">
        <i class="fas fa-link" />
        <a href={basics.url}>{basics.url.replace('https://', '')}</a>
      </div>
      {#each basics.profiles as profile}
        <div class="contact">
          <i class="fab fa-{profile.network}" />
          <a href={profile.url}>{profile.username}</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: auto 15rem;
    height: max-content;
  }

  h1 {
    font-family: var(--serif);
    font-size: 28pt;
  }

  .contacts {
    display: grid;
    row-gap: 0.25rem;
    font-size: 10pt;
  }

  .contact {
    display: grid;
    grid-template-columns: 1rem auto;
    column-gap: 0.5rem;
    align-items: center;
  }

  i {
    transform: translateY(1px);
  }

  .lower {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;

    & .contact:nth-child(2) {
      justify-content: center;
    }

    & .contact:nth-child(3) {
      justify-content: right;
    }
  }
</style>
