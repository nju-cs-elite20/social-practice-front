<script lang="ts">
    import type { QuizProblemWithAnswer } from "./QuizProblem";
    import Submit from "./Submit.svelte";

    export let problems: QuizProblemWithAnswer[];
    export let cur_index: number;
    export let classes: string;

    function choose_class(index: number) {
        let class_outline =
            problems[index].user_answer !== undefined ? "" : "outline";
        let class_contrast = cur_index !== index ? "" : "secondary";
        return `${class_contrast} ${class_outline} col`;
    }

    $: btn_classes = problems.map((problem, index) => {
        return {
            id: index,
            class: choose_class(index),
        };
    });

    function chooseOption(optionId: number) {
        cur_index = optionId;
        problems = problems;
    }
</script>

<aside class={classes}>
    <article>
        <div class="row row-cols-3">
            {#each btn_classes as btn}
                <button class={btn.class} on:click={() => chooseOption(btn.id)}
                    >{btn.id + 1}</button
                >
            {/each}
        </div>
        <Submit on:submit />
    </article>
</aside>
