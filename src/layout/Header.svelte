<script lang="ts">
    //  Components
    import Input from "../components/utility/Input.svelte";
    import ToggleTheme from "./Header/ToggleTheme.svelte";

    //  Library
    import data from "../stores/data";
    import { getLanguageStats } from "../library";

    let username = "";
    async function fetchData() {
        if (!username) return;
        data.set(await getLanguageStats(username));
    }
</script>

<header>
    <h1>Languages</h1>
    <div>
        <Input bind:value={username} on:submit={fetchData} />
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
        gap: 0.75rem;
    }

    @media (max-width: 768px) {
        header {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>
