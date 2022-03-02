<script lang="ts">
    //  Data
    import data from "../data/languages.json";

    //  Helpers
    import { getLanguageColor } from "../helpers";

    const languages: [string, number][] = Object.entries(data);
</script>

<section>
    <!-- CHART -->
    <div>
        <svg height="24" width="24" viewBox="0 0 24 24">
            <circle r="12" cx="12" cy="12" fill="white" />
            {#each languages as [language, bytes]}
                <circle
                    r="7"
                    cx="12"
                    cy="12"
                    fill="transparent"
                    stroke={getLanguageColor(language)}
                    stroke-width="1"
                    stroke-dasharray="100 100"
                    transform="rotate(-90) translate(-24)"
                />
            {/each}
        </svg>
    </div>

    <!-- LIST -->
    <div>
        <ol>
            {#each languages as [language, bytes]}
                <li>{language}: {bytes} bytes</li>
            {/each}
        </ol>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
        max-height: 60vh;
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.75rem;
    }
</style>
