<script lang="ts">
    export let value: string = "";
</script>

<div>
    <form on:submit|preventDefault>
        <input bind:value placeholder="username" />
        <button type="submit">Get</button>
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

    input,
    button {
        font: inherit;
        padding: 0.5rem 1rem;
    }

    button {
        color: var(--clr-background);
        background-color: var(--clr-text);
        border: 1px solid var(--clr-text);
        border-radius: 4px;
        transition: all var(--animation-duration) ease-in;
        cursor: pointer;
    }

    button:hover,
    button:focus {
        opacity: 0.8;
    }
</style>
