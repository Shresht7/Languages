<script lang="ts">
    //  Components
    import Chart from "./Chart.svelte";
    import List from "./List.svelte";

    //  Data
    import data from "../stores/data";

    /** Record of languages and their corresponding number of bytes sorted in descending order */
    let languages: [string, number][] = [];
    $: languages = Object.entries($data).sort((a, b) => b[1] - a[1]);

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
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 1rem;
        padding: 0 1rem;
    }

    @media (max-width: 768px) {
        section {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
</style>
