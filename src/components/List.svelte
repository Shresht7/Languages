<script lang="ts">
    //  Helpers
    import { percentageString } from "../helpers";

    //  Props
    export let languages: [string, number][] = [];
    export let totalBytes: number = 1;
</script>

<div id="list">
    <ol>
        {#each languages as [language, bytes]}
            <li>
                <div>
                    <p>{language}</p>
                    <p>{bytes} bytes</p>
                </div>
                <div>
                    <p class="percentage">
                        {percentageString(bytes / totalBytes)}
                    </p>
                </div>
            </li>
        {/each}
    </ol>
</div>

<style>
    #list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ol {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0rem 2rem;
    }

    li {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--clr-text);
        padding: 0.5rem 1rem;
        border-radius: 8px;
    }
</style>
