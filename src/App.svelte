<script lang="ts">
  import NavTable from "./lib/NavTable.svelte";
  import QuizPage from "./lib/QuizPage.svelte";
  import { QuizProblemWithAnswer } from "./lib/QuizProblem";
  import NavBar from "./lib/NavBar.svelte";

  const problems: QuizProblemWithAnswer[] = [
    new QuizProblemWithAnswer({
      problem_text: "由于中国在巴黎和会上外交失败，_________________爆发的五四爱国运动，是一次彻底的反对帝国主义和封建主义的革命运动，其促进了中国共产党的诞生",
      problem_options: ["1918年5月4日", "1919年5月4日", "1920年5月4日", "1921年5月4日"],
    }),
    new QuizProblemWithAnswer({
      problem_text: "第一次国共合作破裂后，面对国民党政府的残酷镇压，周恩来、贺龙等人在（）领导了南昌起义，打响了武装反抗国民党反动派的第一枪，揭开了中国共产党独立领导武装斗争和创建革命军队的序幕，后来每年的该日被定为建军节",
      problem_options: ["1927年 8月1日", "1927年 7月1日", "1928年 8月1日", "1928年 7月1日"],
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
