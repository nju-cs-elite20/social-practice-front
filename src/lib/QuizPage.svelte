<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import MoveBar from "./MoveBar.svelte";
    import type { QuizProblemWithAnswer } from "./QuizProblem";

    export let problem: QuizProblemWithAnswer;
    export let classes: string;
    export let cur_index: number;
    export let min: number;
    export let max: number;

    const dispatch = createEventDispatcher();

    $: options = problem.problem_options.map((option, index) => {
        return {
            id: index,
            text: option,
            is_chosen: problem.user_answer === index,
        };
    });

    function chooseOption(optionId: number) {
        problem.user_answer = optionId;
        problem = problem;
        dispatch("next");
    }
</script>

<div class={classes}>
    <article>
        <header>
            {problem.problem_text}
        </header>
        <body>
            {#each options as option}
                <button
                    on:click={() => chooseOption(option.id)}
                    class={option.is_chosen ? "" : "outline"}
                >
                    {option.text}
                </button>
            {/each}
        </body>
        <footer>
            <MoveBar {cur_index} {min} {max} on:next on:prev on:submit/>
        </footer>
    </article>
</div>
