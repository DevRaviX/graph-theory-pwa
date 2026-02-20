<script>
    import QuizEngine from "$lib/components/QuizEngine.svelte";
    import { examMCQs } from "$lib/data.js";
</script>

<QuizEngine title="Exam Mode" dataSource={examMCQs} />
