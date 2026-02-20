<script>
    import LectureCard from "$lib/components/LectureCard.svelte";
    import { syllabusNotes } from "$lib/data.js";
</script>

<div class="animate-[fadeIn_0.5s_ease]">
    {#each syllabusNotes as unitData (unitData.unit)}
        <LectureCard {unitData} />
    {/each}
</div>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
