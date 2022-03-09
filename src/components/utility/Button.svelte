<script lang="ts"></script>

<button {...$$props} on:click>
    <slot />
</button>

<style>
    button {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        font: inherit;
        padding: 0.5rem 1rem;
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

    button:disabled {
        opacity: 0.3;
    }
</style>
