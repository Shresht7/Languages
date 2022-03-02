<script lang="ts">
    //  Transition
    import { fly } from "svelte/transition";

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
        {#each languages as [language, bytes], idx}
            <li
                on:mouseover={() => setHovering(language)}
                on:focus={() => setHovering(language)}
                on:mouseout={() => clearHovering()}
                on:blur={() => clearHovering()}
                style:--clr={getLanguageColor(language)}
                class:highlighted={hoveringOver === language}
                class:fade={hoveringOver && hoveringOver !== language}
                in:fly={{ y: 200, duration: 250, delay: 75 + 75 * idx }}
            >
                <div>
                    <p class="language">{language}</p>
                    <p class="bytes">{bytes} bytes</p>
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
        max-width: 35vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        #list {
            max-width: 70vw;
        }
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
        color: var(--clr-text);
        background-color: transparent;
        border: 1px solid var(--clr-text);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        transition: all var(--animation-duration) ease-in;
        position: relative;
        overflow: hidden;
    }

    .highlighted {
        color: var(--clr, --clr-text);
        border-color: var(--clr, --clr-text);
    }

    li::before {
        content: "";
        position: absolute;
        top: 0;
        left: -1px;
        width: 6px;
        height: 100%;
        background-color: var(--clr, --clr-text);
        z-index: 1;
    }

    li:hover,
    li:focus {
        color: var(--clr-background);
        background-color: var(--clr-text);
        outline: 1px solid var(--clr, --clr-text);
        transform: scale(1.05);
        box-shadow: 0 0 5px 1px var(--clr);
    }

    .fade {
        opacity: 0.33;
    }

    .bytes {
        opacity: 0.5;
    }
</style>
