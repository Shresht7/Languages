<script lang="ts">
    //  Helpers
    import { getLanguageColor, percentage } from "../helpers";

    //  Props
    /** Record of languages and their corresponding number of bytes */
    export let languages: [string, number][] = [];
    /** Aggregated sum of the number of bytes across all languages */
    export let totalBytes: number = 1;
</script>

<div>
    <svg height="42" width="42" viewBox="0 0 42 42">
        <!-- DOUGHNUT CIRCLE -->
        <circle r="21" cx="21" cy="21" fill="transparent" />

        <!-- PIE-CHART SEGMENTS -->
        {#each languages as [language, bytes], idx}
            <circle
                r="15.91549430918954"
                cx="21"
                cy="21"
                fill="transparent"
                stroke={getLanguageColor(language)}
                stroke-width="3"
                stroke-dasharray={`${percentage(bytes / totalBytes)} ${
                    100 - percentage(bytes / totalBytes)
                }`}
                stroke-dashoffset={`${
                    100 -
                    percentage(
                        languages
                            .filter((_, i) => i < idx)
                            .reduce((a, c) => a + c[1], 0) / totalBytes
                    )
                }`}
                transform="rotate(-90) translate(-42)"
            />
        {/each}
    </svg>
</div>

<style>
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
</style>
