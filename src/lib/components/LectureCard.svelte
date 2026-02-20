<script>
    /** @type {{ unitData: any }} */
    let { unitData } = $props();
    let isExpanded = $state(false);

    function toggle() {
        isExpanded = !isExpanded;
    }

    // Re-trigger MathJax when expanded
    function onExpand() {
        if (
            isExpanded &&
            typeof window !== "undefined" &&
            /** @type {any} */ (window).MathJax
        ) {
            setTimeout(() => {
                /** @type {any} */ (window).MathJax.typesetPromise();
            }, 50);
        }
    }

    $effect(() => {
        onExpand();
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="bg-[var(--surface-dark)] border rounded-[var(--radius-lg)] mb-5 overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-md hover:shadow-black/30 hover:transform hover:-translate-y-0.5 {isExpanded
        ? 'border-opacity-30 border-white'
        : 'border-[var(--border-glass)]'}"
>
    <div
        class="p-5 flex justify-between items-center cursor-pointer select-none transition-colors duration-300 hover:bg-white/5"
        onclick={toggle}
    >
        <div class="flex flex-col gap-1.5 flex-1">
            <span
                class="inline-block px-3 py-1 bg-[var(--accent-glow)] text-[var(--accent-primary)] text-xs font-bold tracking-wider uppercase rounded-full w-max border border-[var(--accent-primary)]/20 shadow-sm"
                >{unitData.unit}</span
            >
            <h2
                class="text-[1.35rem] leading-tight m-0 text-white font-semibold pr-2"
            >
                {unitData.title}
            </h2>
        </div>
        <div
            class="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-[var(--text-muted)] transition-all duration-300 border border-transparent shadow-[var(--shadow-inner)] {isExpanded
                ? 'rotate-180 bg-[var(--accent-primary)] text-white border-white/20'
                : ''}"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </div>
    </div>

    {#if isExpanded}
        <div
            class="p-[1.25rem_1.5rem_1.75rem] border-t border-[var(--border-glass)] bg-gradient-to-b from-transparent to-black/20 animate-[slideDown_0.3s_cubic-bezier(0.4,0,0.2,1)]"
        >
            {#each unitData.topics as topic}
                <div class="mb-8 last:mb-0">
                    <h3
                        class="text-xl text-[var(--accent-primary)] mb-3 pb-2 border-b border-[var(--border-glass)] font-semibold"
                    >
                        {topic.title}
                    </h3>
                    <div
                        class="text-[0.95rem] leading-[1.7] text-[var(--text-secondary)] list-inside marker:text-[var(--accent-secondary)] space-y-3 prose-p:mb-3 prose-ul:mb-3 prose-ul:pl-4 prose-li:mb-1.5 prose-strong:text-white prose-strong:font-medium"
                    >
                        {@html topic.content}
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
