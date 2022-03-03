<script lang="ts">
    //  Library
    import { fly } from "svelte/transition";

    //  Components
    import Button from "./utility/Button.svelte";
    import Icon from "./utility/Icon.svelte";
    import IoIosReturnLeft from "svelte-icons/io/IoIosReturnLeft.svelte";

    //  Props
    export let value: string = "";
</script>

<div in:fly={{ y: 50, duration: 500, opacity: 0 }}>
    <form on:submit|preventDefault>
        <input bind:value placeholder="username" />
        <Button type="submit" style="padding: 0.5rem;">
            <Icon><IoIosReturnLeft /></Icon>
        </Button>
    </form>
</div>

<style>
    div,
    form {
        height: 100%;
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
        padding: 0.65rem 1rem;
        height: 100%;
    }
</style>
