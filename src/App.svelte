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

  let cur_index: number = 0;
</script>

<main>
  <NavTable bind:cur_index={cur_index} {problems}/>
  
  <QuizPage bind:problem={problems[cur_index]}/>

  {#each problems as problem}
    <p>{problem.problem_text}</p>
    <p>{problem.problem_options[problem.user_answer]}</p>
  {/each}
</main>
