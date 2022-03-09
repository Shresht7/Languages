<script lang="ts">
    //  Transition
    import { fly } from "svelte/transition";

    //  Helpers
    import { getLanguageColor, percentageString } from "../helpers";

    //  Stores
    import { highlight } from "../stores";

    const setHovering = (language: string) => highlight.set(language);
    const clearHovering = () => highlight.set(null);

    //  Props
    /** List item index number */
    export let idx: number;
    /** List item language */
    export let language: string;
    /** Total number of languages */
    export let maxCount: number = 0;
    /** Number of bytes corresponding to the current language */
    export let bytes: number = 0;
    /** Total number of bytes across all languages */
    export let totalBytes: number = 1;
</script>

<li
    on:mouseover={() => setHovering(language)}
    on:focus={() => setHovering(language)}
    on:mouseout={() => clearHovering()}
    on:blur={() => clearHovering()}
    class:highlighted={$highlight === language}
    class:fade={$highlight && $highlight !== language}
    style:--clr={getLanguageColor(language)}
    style:width={maxCount > 7 ? "80%" : "100%"}
    in:fly={{ y: 200, duration: 250, delay: 75 + 75 * idx }}
>
    <div>
        <p class="language">{language}</p>
        <p class="bytes">{bytes.toLocaleString("en-US")} bytes</p>
    </div>
    <div>
        <p class="percentage">
            {percentageString(bytes / totalBytes)}
        </p>
    </div>
</li>

<style>
    li {
        --clr: var(--clr-text);

        width: 100%;
        min-height: 3.5rem;
        padding: 0.5rem 1rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        color: var(--clr-text);
        background-color: transparent;
        border: 1px solid var(--clr-text);
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

    @media (max-width: 768px) {
        li {
            width: 80%;
        }
    }
</style>
