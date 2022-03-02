<script lang="ts">
    //  Helpers
    import { percentageString } from "../helpers";

    //  Props
    export let languages: [string, number][] = [];
    export let totalBytes: number = 1;
</script>

<div>
    <ol>
        {#each languages as [language, bytes]}
            <li>
                {language}: {bytes} bytes ({percentageString(
                    bytes / totalBytes
                )})
            </li>
        {/each}
    </ol>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.75rem;
    }
</style>
