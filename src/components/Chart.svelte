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
    <svg height="24" width="24" viewBox="0 0 24 24">
        <!-- BACKDROP CIRCLE -->
        <circle r="12" cx="12" cy="12" fill="white" />

        <!-- PIE-CHART SEGMENTS -->
        {#each languages as [language, bytes]}
            <circle
                r="7"
                cx="12"
                cy="12"
                fill="transparent"
                stroke={getLanguageColor(language)}
                stroke-width="1"
                stroke-dasharray={`${percentage(bytes / totalBytes)} 31.42`}
                transform="rotate(-90) translate(-24)"
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
