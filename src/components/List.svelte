<script lang="ts">
    //  Components
    import ListItem from "./ListItem.svelte";

    //  Props
    export let languages: [string, number][] = [];
    export let totalBytes: number = 1;

    let maxCount: number = 0;
    $: maxCount = languages.length;
</script>

<div id="list">
    <ol on:wheel={(e) => (e.currentTarget.scrollLeft += e.deltaY)}>
        {#each languages as [language, bytes], idx}
            <ListItem {idx} {language} {maxCount} {bytes} {totalBytes} />
        {/each}
    </ol>
</div>

<style>
    #list {
        width: 100%;
        max-height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ol {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 1rem;
        overflow-y: hidden;
        scroll-behavior: auto;
    }

    @media (max-width: 768px) {
        #list {
            max-width: 95%;
        }

        ol {
            max-height: 60vh;
            padding: 0.5rem;
        }
    }

    @media (min-width: 768px) {
        /* --------- */
        /* SCROLLBAR */
        /* --------- */

        /* width */
        ol::-webkit-scrollbar {
            height: 4px;
            border-radius: 2px;
        }

        /* Track */
        ol::-webkit-scrollbar-track {
            background-color: #575757;
            border-radius: 2px;
        }

        /* Handle */
        ol::-webkit-scrollbar-thumb {
            background-color: #999;
            border-radius: 2px;
        }

        /* Handle on hover */
        ol::-webkit-scrollbar-thumb:hover {
            background-color: var(--clr-text);
            border-radius: 2px;
        }
    }
</style>
