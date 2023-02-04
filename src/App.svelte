<script lang="ts">
  import NavTable from "./lib/NavTable.svelte";
  import QuizPage from "./lib/QuizPage.svelte";
  import { QuizProblemWithAnswer } from "./lib/QuizProblem";


  const problems: QuizProblemWithAnswer[] = [
    new QuizProblemWithAnswer({
      problem_text: "What is 1 + 1?",
      problem_options: ["1", "2", "3", "4"],
    }),
    new QuizProblemWithAnswer({
      problem_text: "What is 2 + 2?",
      problem_options: ["1", "2", "3", "4"],
    }),
    new QuizProblemWithAnswer({
      problem_text: "What is 3 + 3?",
      problem_options: ["1", "2", "3", "4"],
    }),
  ];
  $: problem = problems[cur_index];

  let cur_index: number = 0;

  function get_next() {
    cur_index = Math.min(cur_index + 1, problems.length - 1);
  }
</script>

<main>
  <NavTable bind:cur_index {problems}/>
  
  <QuizPage bind:problem on:next={() => cur_index += 1}/>

  {#each problems as problem}
    <p>{problem.problem_text}</p>
    <p>{problem.problem_options[problem.user_answer]}</p>
  {/each}
</main>
