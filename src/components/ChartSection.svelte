<script lang="ts">
    //  Components
    import Chart from "./Chart.svelte";
    import List from "./List.svelte";

    export let data: Record<string, number> = {};

    /** Record of languages and their corresponding number of bytes sorted in descending order */
    let languages: [string, number][] = [];
    $: languages = Object.entries(data).sort((a, b) => b[1] - a[1]);

    /** Aggregated sum of all bytes across all languages */
    let totalBytes: number = 1;
    $: totalBytes = languages.reduce((acc, [_, bytes]) => acc + bytes, 0);
</script>

<section>
    <Chart bind:languages bind:totalBytes />
    <List bind:languages bind:totalBytes />
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
        gap: 1rem;
    }

    @media (max-width: 768px) {
        section {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
</style>
