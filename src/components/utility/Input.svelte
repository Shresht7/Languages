<script lang="ts">
    //  Components
    import Button from "../../components/utility/Button.svelte";
    import Icon from "../../components/utility/Icon.svelte";
    import IoIosReturnLeft from "svelte-icons/io/IoIosReturnLeft.svelte";

    //  Props
    export let value: string = "";
</script>

<div>
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
        gap: 0.33rem;
    }

    input {
        font: inherit;
        font-size: 1rem;
        padding: 0.65rem 1rem;
        height: 100%;
    }
</style>
