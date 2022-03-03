<script lang="ts">
  //  Library
  import { onMount } from "svelte";

  //  Components
  import Header from "./layout/Header.svelte";
  import Input from "./components/Input.svelte";
  import ChartSection from "./components/ChartSection.svelte";
  import Footer from "./layout/Footer.svelte";

  //  Data
  import { getLanguageStats } from "./library";
  import cachedData from "./data/languages.json";

  let data: Record<string, number> = cachedData;

  let username: string = "";
  async function fetchData() {
    if (!username) return;
    data = await getLanguageStats(username);
  }

  //  Theme
  import theme from "./themes/store";
  //  Initialize theme
  onMount(() => {
    theme.setRootColors($theme);
  });
</script>

<Header />

<main>
  <Input bind:value={username} on:submit={fetchData} />
  <ChartSection {data} />
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

    background-color: var(--clr-background);
    box-shadow: var(--shadow);
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    main {
      min-height: 100vh;
      justify-content: flex-start;
      padding: 1.5rem 0.5rem;
    }
  }
</style>
