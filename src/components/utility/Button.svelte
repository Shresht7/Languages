<script lang="ts"></script>

<button {...$$props}>
    <slot />
</button>

<style>
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
