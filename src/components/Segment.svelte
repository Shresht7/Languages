<script lang="ts">
    //  Helpers
    import { percentage, getLanguageColor } from "../helpers";

    //  Store
    import { highlight, setHovering, clearHovering } from "../stores/highlight";

    //  Props
    export let language: string = "";
    export let bytes: number = 0;
    export let cumulativeBytes: number = 0;
    export let totalBytes: number = 1;

    let percent: number = 0;
    $: percent = percentage(bytes / totalBytes);
    let cumulativePercent: number = 0;
    $: cumulativePercent = percentage(cumulativeBytes / totalBytes);
</script>

<!-- SEGMENT -->
<circle
    r="15.91549430918954"
    cx="21"
    cy="21"
    fill="transparent"
    class="transitional"
    stroke={getLanguageColor(language)}
    stroke-width={$highlight === language ? "5" : "3"}
    stroke-dasharray={`${percent} ${100 - percent}`}
    stroke-dashoffset={`${100 - cumulativePercent}`}
    class:fade={$highlight && $highlight !== language}
    transform="rotate(-90) translate(-42)"
    on:mouseover={() => setHovering(language)}
    on:focus={() => setHovering(language)}
    on:mouseout={() => clearHovering()}
    on:blur={() => clearHovering()}
/>

<style>
    .transitional {
        transition: all var(--animation-duration) ease-in;
    }

    .fade {
        opacity: 0.33;
    }
</style>
