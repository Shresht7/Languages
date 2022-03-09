<script lang="ts">
</script>

<div class="container">
    <div class="track" />
    <div class="spinner" />
</div>

<style>
    .container {
        --spinner-width: 2px;
        position: relative;
    }

    .track {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        aspect-ratio: 1 / 1;
        border: var(--spinner-width) solid var(--clr-text);
        border-radius: 50%;
    }

    .spinner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border-top: var(--spinner-width) solid var(--clr-background);
        animation: spin 1s infinite;
        z-index: 1;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
