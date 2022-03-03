<script lang="ts">
    export let size: string | number = "1.5rem";
    export let color: string = undefined;
</script>

<div style:width={size} style:height={size} style:color>
    <slot />
</div>

<style>
    div {
        width: 1.5rem;
        height: 1.5rem;
    }
</style>
