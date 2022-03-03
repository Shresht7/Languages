<script lang="ts">
    //  Components
    import Embed from "./Header/Embed.svelte";
    import ToggleTheme from "./Header/ToggleTheme.svelte";
</script>

<header>
    <h1>Languages</h1>
    <div>
        <Embed />
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
</style>
