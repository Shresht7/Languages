<script lang="ts">
    //  Themes
    import theme from "../themes/store";
</script>

<header>
    <h1>Languages</h1>
    <button on:click={() => theme.toggle()}>Toggle</button>
</header>

<style>
    header {
        padding: 1rem 2rem;
    }
</style>
