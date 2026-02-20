<script>
    /** @type {{ unitData: any }} */
    let { unitData } = $props();
    let isExpanded = $state(false);

    // Per-unit color palette
    const unitStyles = {
        "Unit I": {
            accent: "#38BDF8",
            bg: "rgba(56,189,248,0.08)",
            label: "sky",
        },
        "Unit II": {
            accent: "#A78BFA",
            bg: "rgba(167,139,250,0.08)",
            label: "violet",
        },
        "Unit III": {
            accent: "#34D399",
            bg: "rgba(52,211,153,0.08)",
            label: "emerald",
        },
        "Unit IV": {
            accent: "#FCD34D",
            bg: "rgba(252,211,77,0.08)",
            label: "amber",
        },
        "Unit V": {
            accent: "#FB7185",
            bg: "rgba(251,113,133,0.08)",
            label: "rose",
        },
    };

    // Unit number (I=1, II=2 …)
    const unitNums = {
        "Unit I": "I",
        "Unit II": "II",
        "Unit III": "III",
        "Unit IV": "IV",
        "Unit V": "V",
    };

    const style = $derived(
        unitStyles[/** @type {keyof typeof unitStyles} */ (unitData.unit)] ??
            unitStyles["Unit I"],
    );
    const num = $derived(
        unitNums[/** @type {keyof typeof unitNums} */ (unitData.unit)] ?? "?",
    );

    function toggle() {
        isExpanded = !isExpanded;
    }

    $effect(() => {
        if (isExpanded && typeof window !== "undefined") {
            setTimeout(() => {
                // MathJax
                if (/** @type {any} */ (window).MathJax) {
                    /** @type {any} */ (window).MathJax.typesetPromise();
                }
                // Mermaid
                if (/** @type {any} */ (window).mermaid) {
                    try {
                        /** @type {any} */ (window).mermaid.run({
                            querySelector: ".mermaid",
                        });
                    } catch (e) {
                        console.error("Mermaid error:", e);
                    }
                }
            }, 60);
        }
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="unit-card"
    class:expanded={isExpanded}
    style="--unit-accent: {style.accent}; --unit-bg: {style.bg};"
>
    <!-- ── Header ── -->
    <div
        class="unit-card-header"
        onclick={toggle}
        role="button"
        tabindex="0"
        aria-expanded={isExpanded}
        aria-controls="unit-body-{unitData.unit}"
    >
        <!-- Colored number badge -->
        <div
            class="unit-num"
            style="background: {style.bg}; color: {style.accent}; border-color: {style.accent}22;"
        >
            {num}
        </div>

        <!-- Text meta -->
        <div class="unit-card-meta">
            <span
                class="unit-badge"
                style="color: {style.accent}; border-color: {style.accent}55;"
            >
                {unitData.unit}
            </span>
            <p class="unit-title">{unitData.title}</p>
        </div>

        <!-- Chevron -->
        <div
            class="unit-chevron"
            class:open={isExpanded}
            style={isExpanded
                ? `background: ${style.accent}; border-color: ${style.accent};`
                : ""}
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </div>
    </div>

    <!-- ── Expanded Body ── -->
    {#if isExpanded}
        <div class="unit-body" id="unit-body-{unitData.unit}">
            {#each unitData.topics as topic, i}
                <div
                    class="topic-section"
                    style="animation: fadeUp 0.3s cubic-bezier(0.22,1,0.36,1) {i *
                        0.06}s both;"
                >
                    <h3
                        class="topic-title"
                        style="--unit-accent: {style.accent};"
                    >
                        {topic.title}
                    </h3>
                    <div
                        class="prose-content"
                        style="--unit-accent: {style.accent};"
                    >
                        {@html topic.content}
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>
