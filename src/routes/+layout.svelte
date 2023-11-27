<script>
  import './styles.scss';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faClock } from '@fortawesome/free-solid-svg-icons';
  import { config } from '@fortawesome/fontawesome-svg-core';

  import '@fortawesome/fontawesome-svg-core/styles.css';

  config.autoAddCss = false;
</script>

<header>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">
        <FontAwesomeIcon icon={faClock} />
        Seven Segment Clock
      </a>
    </div>
  </nav>
</header>

<main class="container">
  <slot />
</main>

<style lang="scss">
  main {
    padding-top: 1rem;
  }
</style>
