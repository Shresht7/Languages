<script lang="ts">
    //  Components
    import Button from "../components/utility/Button.svelte";

    //  Themes
    import theme from "../themes/store";
</script>

<header>
    <h1>Languages</h1>
    <Button on:click={() => theme.toggle()}>Toggle</Button>
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
