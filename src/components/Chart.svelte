<script lang="ts">
    //  Helpers
    import { getLanguageColor, percentage } from "../helpers";

    //  Props
    /** Record of languages and their corresponding number of bytes */
    export let languages: [string, number][] = [];
    /** Aggregated sum of the number of bytes across all languages */
    export let totalBytes: number = 1;

    //  Store
    import { highlight } from "../stores";

    const setHovering = (language: string) => highlight.set(language);
    const clearHovering = () => highlight.set(null);

    //  State
    let percent: number = 0;
    let cumulativePercent: number = 0;
</script>

<div>
    <svg
        height="42"
        width="42"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
    >
        <!-- BACKDROP CIRCLE -->
        <circle r="21" cx="21" cy="21" fill="transparent" />

        <!-- PIE-CHART SEGMENTS -->
        {#each languages as [language, bytes], idx}
            <!-- Percentage share of the current language -->
            {(percent = percentage(bytes / totalBytes))}

            <!-- Calculate the current cumulative number of bytes -->
            {(cumulativePercent =
                percentage(
                    languages
                        // filter languages below the current index
                        .filter((_, i) => i < idx)
                        //  Calculate the sum
                        .reduce((a, c) => a + c[1], 0)
                ) / totalBytes)}

            <!-- SEGMENT -->
            <circle
                r="15.91549430918954"
                cx="21"
                cy="21"
                fill="transparent"
                class="transitional"
                stroke={getLanguageColor(language)}
                stroke-width={$highlight === language ? "5" : "3"}
                stroke-dasharray={`${percent} ${100 - percent}`}
                stroke-dashoffset={`${100 - cumulativePercent}`}
                class:fade={$highlight && $highlight !== language}
                transform="rotate(-90) translate(-42)"
                on:mouseover={() => setHovering(language)}
                on:focus={() => setHovering(language)}
                on:mouseout={() => clearHovering()}
                on:blur={() => clearHovering()}
            />
        {/each}
    </svg>
</div>

<style>
    div {
        width: 100%;
        max-width: 30vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: scaleup 1s forwards;
        animation-delay: 200ms;
        opacity: 0;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    @keyframes scaleup {
        from {
            transform: scale(0.01);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    .transitional {
        transition: all var(--animation-duration) ease-in;
    }

    .fade {
        opacity: 0.33;
    }
</style>
