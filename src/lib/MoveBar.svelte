<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Submit from "./Submit.svelte";
    export let cur_index: number;
    export let min: number;
    export let max: number;
    const dispatch = createEventDispatcher();
</script>

<div class="row row-cols-3">

    {#if cur_index > min}
        <button
            class="outline col-sm-3"
            on:click={() => dispatch("prev")}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
        </button>
    {:else}
        <div class="col-sm-3" />
    {/if}

    <div class="col-lg-6" />

    {#if cur_index < max}
        <button
            class="outline col-sm-3"
            on:click={() => dispatch("next")}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
        </button>
    {:else}
        <Submit classes="col-sm-3" on:submit />
    {/if}
</div>