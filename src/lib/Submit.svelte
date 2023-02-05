<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let classes: string = "";
    const dispatch = createEventDispatcher();

</script>

<button class={classes} on:click={() => dispatch("submit")}>
    Submit
</button>