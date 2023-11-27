<script>
  import './styles.scss';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faClock } from '@fortawesome/free-solid-svg-icons';
  import { config } from '@fortawesome/fontawesome-svg-core';
  import { page } from '$app/stores';

  import '@fortawesome/fontawesome-svg-core/styles.css';

  config.autoAddCss = false;
</script>

<header>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">
        <FontAwesomeIcon icon={faClock} />
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <a
            class="nav-link"
            class:active={$page.url.pathname === '/'}
            aria-current={$page.url.pathname === '/' ? 'page' : undefined}
            href="/">Home</a
          >
          <!--          <a-->
          <!--            class="nav-link"-->
          <!--            class:active={$page.url.pathname === '/about'}-->
          <!--            aria-current={$page.url.pathname === '/about' ? 'page' : undefined}-->
          <!--            href="/about">About</a-->
          <!--          >-->
        </div>
      </div>
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
