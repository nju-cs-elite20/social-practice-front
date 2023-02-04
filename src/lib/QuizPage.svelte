<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { QuizProblemWithAnswer } from "./QuizProblem";

    export let problem: QuizProblemWithAnswer;
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
</article>
