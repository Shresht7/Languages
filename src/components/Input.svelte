<script lang="ts">
    export let value: string = "";
</script>

<div>
    <form on:submit|preventDefault>
        <input bind:value />
        <button type="submit">Get</button>
    </form>
</div>

<style>
</style>
