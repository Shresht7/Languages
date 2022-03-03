<script lang="ts">
    //  Library
    import { fly } from "svelte/transition";

    //  Components
    import Button from "./utility/Button.svelte";

    //  Props
    export let value: string = "";
</script>

<div in:fly={{ y: 50, duration: 500, opacity: 0 }}>
    <form on:submit|preventDefault>
        <input bind:value placeholder="username" />
        <Button type="submit">Get</Button>
    </form>
</div>

<style>
    div,
    form {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    form {
        gap: 0.75rem;
    }

    input {
        font: inherit;
        padding: 0.5rem 1rem;
    }
</style>
