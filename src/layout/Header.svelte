<script lang="ts">
    //  Components
    import Input from "../components/utility/Input.svelte";
    import ToggleTheme from "./Header/ToggleTheme.svelte";

    //  Library
    import data from "../stores/data";
    import { getLanguageStats } from "../library";

    //  Transition
    import { fly } from "svelte/transition";

    /** User input search string for GitHub username */
    let username = "";
    /** Boolean flag to denote whether a fetch request is underway */
    let loading = false;

    /** Fetch language stats */
    async function fetchData() {
        if (!username) return;
        loading = true;
        data.set(await getLanguageStats(username));
        loading = false;
    }
</script>

<header in:fly={{ y: -100, opacity: 0 }}>
    <h1>Languages</h1>
    <div>
        <Input bind:value={username} on:submit={fetchData} {loading} />
        <ToggleTheme />
    </div>
</header>

<style>
    header {
        width: 100%;
        padding: 1rem 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 768px) {
        header {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>
