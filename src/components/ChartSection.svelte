<script lang="ts">
    //  Components
    import Chart from "./Chart.svelte";
    import List from "./List.svelte";

    //  Data
    import data from "../data/languages.json";

    /** Record of languages and their corresponding number of bytes sorted in descending order */
    const languages: [string, number][] = Object.entries(data).sort(
        (a, b) => b[1] - a[1]
    );

    /** Aggregated sum of all bytes across all languages */
    const totalBytes = languages.reduce((acc, [_, bytes]) => acc + bytes, 0);
</script>

<section>
    <Chart {languages} {totalBytes} />
    <List {languages} {totalBytes} />
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
</style>
