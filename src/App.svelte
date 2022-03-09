<script lang="ts">
  //  Library
  import { onMount } from "svelte";

  //  Components
  import Header from "./layout/Header.svelte";
  import ChartSection from "./components/ChartSection.svelte";
  import Footer from "./layout/Footer.svelte";

  //  Theme
  import theme from "./themes/store";
  //  Initialize theme
  onMount(() => {
    theme.setRootColors($theme);
  });
</script>

<Header />

<main>
  <ChartSection />
</main>

<Footer />

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
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow-x: hidden;
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
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* MAIN */
  main {
    width: 85vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 2rem;

    margin: 0 auto;
    padding: 4vh 2vw;

    background-color: var(--clr-background);
    box-shadow: var(--shadow);
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    :global(body) {
      font-size: 0.75rem;
    }
    main {
      width: 98vw;
      justify-content: flex-start;
      padding: 3vh 1vw;
    }
  }
</style>
