<script lang="ts">
    //  Components
    import Button from "../../components/utility/Button.svelte";
    import Loading from "./Loading.svelte";
    import Icon from "../../components/utility/Icon.svelte";
    import IoIosReturnLeft from "svelte-icons/io/IoIosReturnLeft.svelte";

    //  Props
    export let value: string = "";
    export let loading: boolean = false;
</script>

<div>
    <form on:submit|preventDefault>
        <input bind:value placeholder="username" />
        <Button type="submit" style="padding: 0.5rem;" disabled={value === ""}>
            <Icon>
                {#if !loading}
                    <IoIosReturnLeft />
                {:else}
                    <Loading />
                {/if}
            </Icon>
        </Button>
    </form>
</div>

<style>
    div,
    form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    form {
        gap: 0.5rem;
    }

    input {
        font: inherit;
        font-size: 1rem;
        padding: 0.65rem 1rem;
        height: 100%;
    }
</style>
