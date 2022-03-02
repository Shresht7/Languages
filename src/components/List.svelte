<script lang="ts">
    //  Helpers
    import { getLanguageColor, percentageString } from "../helpers";

    //  Props
    export let languages: [string, number][] = [];
    export let totalBytes: number = 1;

    let hoveringOver: string | null = "";
    const setHovering = (l: string) => (hoveringOver = l);
    const clearHovering = () => (hoveringOver = null);
</script>

<div id="list">
    <ol>
        {#each languages as [language, bytes]}
            <li
                on:mouseover={() => setHovering(language)}
                on:focus={() => setHovering(language)}
                on:mouseout={() => clearHovering()}
                on:blur={() => clearHovering()}
                style:--clr={hoveringOver === language
                    ? getLanguageColor(language)
                    : "black"}
            >
                <div>
                    <p>{language}</p>
                    <p>{bytes} bytes</p>
                </div>
                <div>
                    <p class="percentage">
                        {percentageString(bytes / totalBytes)}
                    </p>
                </div>
            </li>
        {/each}
    </ol>
</div>

<style>
    #list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ol {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0rem 2rem;
    }

    li {
        --clr: var(--clr-text);
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--clr, --clr-text);
        border: 1px solid var(--clr, --clr-text);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: all var(--animation-duration) ease-in;
    }

    li:hover,
    li:focus {
        outline: 1px solid var(--clr, --clr-text);
    }
</style>
