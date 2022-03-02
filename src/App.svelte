<script lang="ts">
  //  Components
  import ChartSection from "./components/ChartSection.svelte";
</script>

<!-- HEADER -->
<header><h1>Languages</h1></header>

<!-- MAIN -->
<main>
  <ChartSection />
</main>

<!-- FOOTER -->
<footer>
  <a href="https://www.github.com/Shresht7/Languages"> View Source Code </a>
</footer>

<!-- STYLE -->
<style>
  /* IMPORTS */
  @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

  /* NORMALIZE */
  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* CSS VARIABLES */
  :global(:root) {
    --clr-backdrop: rgb(224, 224, 224);
    --clr-background: whitesmoke;
    --clr-text: #353535;
    --clr-shadow: rgba(0, 0, 0, 0.3);
    --shadow: 0px 0px 10px 3px var(--clr-shadow);
    --animation-duration: 150ms;
  }

  /* PREFERENCES */
  @media (prefers-reduced-motion) {
    :global(:root) {
      --animation-duration: 1ms;
    }
  }

  /* GENERAL */
  :global(html, body) {
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Share Tech Mono", monospace, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    background-color: var(--clr-backdrop);
    color: var(--clr-text);
  }

  :global(#app) {
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* LAYOUT */
  header,
  footer {
    padding: 1rem 2rem;
  }

  main {
    width: clamp(70vw, 85vw, 95vw);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    margin: 0 auto;
    padding: 1.5rem;

    background-color: var(--clr-background);
    box-shadow: var(--shadow);
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    main {
      min-height: 100vh;
    }
  }
</style>
