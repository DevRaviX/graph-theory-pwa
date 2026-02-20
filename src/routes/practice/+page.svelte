<script>
    import QuizEngine from "$lib/components/QuizEngine.svelte";
    import { practiceMCQs } from "$lib/data.js";
</script>

<QuizEngine title="Practice Mode" dataSource={practiceMCQs} />
