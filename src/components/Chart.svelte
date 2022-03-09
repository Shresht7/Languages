<script lang="ts">
    //  Components
    import ChartSection from "./ChartSection.svelte";

    //  Props
    /** Record of languages and their corresponding number of bytes */
    export let languages: [string, number][] = [];
    /** Aggregated sum of the number of bytes across all languages */
    export let totalBytes: number = 1;
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
            <ChartSection
                {language}
                {bytes}
                {totalBytes}
                cumulativeBytes={languages
                    .filter((_, i) => i < idx)
                    .reduce((a, c) => a + c[1], 0)}
            />
        {/each}
    </svg>
</div>

<style>
    div {
        width: 100%;
        max-width: 35vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: scaleup 1s forwards;
        animation-delay: 200ms;
        opacity: 0;
    }

    @media (max-width: 768px) {
        div {
            max-width: 75%;
        }
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
</style>
