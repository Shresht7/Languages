<script lang="ts">
    //  Components
    import Button from "../components/utility/Button.svelte";
    import Icon from "../components/utility/Icon.svelte";
    import IoIosSun from "svelte-icons/io/IoIosSunny.svelte";
    import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";

    //  Themes
    import theme from "../themes/store";
    import type { themeMode } from "src/types";

    let mode: themeMode = "light";
    $: mode = $theme ? theme.getCurrentTheme() : "light";
</script>

<Button on:click={() => theme.toggle()} style="padding: 0.5rem;">
    {#if mode === "light"}
        <Icon>
            <IoIosMoon />
        </Icon>
    {:else}
        <Icon>
            <IoIosSun />
        </Icon>
    {/if}
</Button>
