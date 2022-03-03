<script lang="ts">
    //  Components
    import ToggleTheme from "../components/ToggleTheme.svelte";
</script>

<header>
    <h1>Languages</h1>
    <ToggleTheme />
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
</style>
