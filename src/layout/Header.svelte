<script lang="ts">
    //  Components
    import ToggleTheme from "./Header/ToggleTheme.svelte";
</script>

<header>
    <h1>Languages</h1>
    <div>
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
