<script lang="ts">
  import NavTable from "./lib/NavTable.svelte";
  import QuizPage from "./lib/QuizPage.svelte";
  import { QuizProblemWithAnswer } from "./lib/QuizProblem";
  import { changeTheme } from "./changeTheme";
  import NavBar from "./lib/NavBar.svelte";

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
    new QuizProblemWithAnswer({
      problem_text: "What is 4 + 4?",
      problem_options: ["1", "2", "3", "4"],
    }),
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
    new QuizProblemWithAnswer({
      problem_text: "What is 4 + 4?",
      problem_options: ["1", "2", "3", "4"],
    }),
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
    new QuizProblemWithAnswer({
      problem_text: "What is 4 + 4?",
      problem_options: ["1", "2", "3", "4"],
    }),
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
    new QuizProblemWithAnswer({
      problem_text: "What is 4 + 4?",
      problem_options: ["1", "2", "3", "4"],
    }),
  ];

  let cur_index: number = 0;
  let show_sidebar = false;

  $: title_text = `Quiz: ${cur_index + 1}/${problems.length}`;

  function get_next() {
    cur_index = Math.min(cur_index + 1, problems.length - 1);
  }

  function get_prev() {
    cur_index = Math.max(cur_index - 1, 0);
  }
</script>

<main>
  <NavBar bind:show_sidebar {title_text} />
  <div>
    <div class="row">
      {#if show_sidebar}
        <NavTable bind:cur_index {problems} classes="col-sm-3" />
      {/if}
      <div class="col" />
      <QuizPage
        bind:problem={problems[cur_index]}
        {cur_index} min={0} max={problems.length - 1}
        on:next={get_next}
        on:prev={get_prev}
        classes="col-lg-6"
      />
      <div class="col" />
    </div>

    {#each problems as problem}
      <p>{problem.problem_text}</p>
      <p>{problem.problem_options[problem.user_answer]}</p>
    {/each}
  </div>
</main>
