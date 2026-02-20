<script>
    /** @type {{ title: string, dataSource: any[] }} */
    let { title, dataSource } = $props();

    /** @type {string|null} */
    let selectedUnit = $state(null);
    /** @type {any[]} */
    let currentQuestions = $state([]);
    let currentQIndex = $state(0);
    let score = $state(0);

    /** @type {'setup' | 'active' | 'result'} */
    let viewState = $state("setup"); // setup, active, result

    // Option interaction state
    let hasAnswered = $state(false);
    /** @type {number|null} */
    let selectedOptionIdx = $state(null);

    function startQuiz() {
        if (!selectedUnit) return;
        /** @type {any} */
        const unitData = dataSource.find(
            (/** @type {any} */ u) => u.unit === selectedUnit,
        );
        if (unitData && unitData.questions.length > 0) {
            currentQuestions = [...unitData.questions];
            currentQIndex = 0;
            score = 0;
            hasAnswered = false;
            selectedOptionIdx = null;
            viewState = "active";
        }
    }

    /**
     * @param {number} idx
     * @param {number} correctIdx
     */
    function selectOption(idx, correctIdx) {
        if (hasAnswered) return;
        hasAnswered = true;
        selectedOptionIdx = idx;

        if (idx === correctIdx) {
            score++;
        }
    }

    function nextQuestion() {
        currentQIndex++;
        hasAnswered = false;
        selectedOptionIdx = null;

        if (currentQIndex >= currentQuestions.length) {
            viewState = "result";
            // trigger circular animation
            setTimeout(animateCircle, 100);
        }
    }

    function resetQuiz() {
        viewState = "setup";
        selectedUnit = null;
    }

    let strokeDasharray = $state("0, 100");
    let strokeColor = $state("var(--accent-primary)");

    function animateCircle() {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        strokeDasharray = `${percentage}, 100`;

        if (percentage >= 80) {
            strokeColor = "var(--accent-success)";
        } else if (percentage < 50) {
            strokeColor = "var(--accent-error)";
        } else {
            strokeColor = "var(--accent-primary)";
        }
    }
</script>

<div class="animate-[fadeIn_0.4s_ease]">
    {#if viewState === "setup"}
        <div
            class="text-center bg-[var(--surface-dark)] border border-[var(--border-glass)] rounded-[var(--radius-lg)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] max-w-xl mx-auto"
        >
            <h2 class="text-2xl mb-8 font-semibold text-white">
                Select Unit for {title}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {#each dataSource as mcqData}
                    <button
                        class="py-4 px-6 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[var(--radius-md)] text-white font-medium text-[1.05rem] transition-all duration-200 cursor-pointer shadow-[var(--shadow-inner)] hover:-translate-y-0.5 hover:bg-white/5 active:scale-95"
                        class:!bg-[var(--accent-primary)]={selectedUnit ===
                            mcqData.unit}
                        class:!border-[var(--accent-primary)]={selectedUnit ===
                            mcqData.unit}
                        class:!shadow-[0_4px_15px_var(--accent-glow)]={selectedUnit ===
                            mcqData.unit}
                        onclick={() => (selectedUnit = mcqData.unit)}
                    >
                        {mcqData.unit}
                    </button>
                {/each}
            </div>
            <button
                disabled={!selectedUnit}
                class="w-full sm:w-auto min-w-[200px] bg-[var(--accent-primary)] text-white border-0 py-4 px-8 rounded-[var(--radius-sm)] font-semibold text-[1.05rem] cursor-pointer transition-all duration-200 shadow-[0_4px_15px_var(--accent-glow)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:not-disabled:bg-[#2563eb] active:not-disabled:scale-95"
                onclick={startQuiz}
            >
                Start {title}
            </button>
        </div>
    {:else if viewState === "active"}
        {@const currentQ = currentQuestions[currentQIndex]}
        <div class="animate-[slideDown_0.3s_ease]">
            <div
                class="flex justify-between items-center mb-6 pb-4 border-b border-[var(--border-glass)]"
            >
                <span
                    class="bg-white/5 px-3 py-1.5 rounded-full text-sm font-medium border border-[var(--border-glass)] text-white shadow-[var(--shadow-inner)]"
                    >Question {currentQIndex +
                        1}/{currentQuestions.length}</span
                >
                <span
                    class="text-[var(--accent-primary)] font-semibold text-[0.95rem] uppercase tracking-wider"
                    >{selectedUnit}</span
                >
            </div>

            <h3
                class="text-[1.35rem] leading-tight text-white mb-10 font-medium"
            >
                {currentQ.question}
            </h3>

            <div class="flex flex-col gap-4 mb-8">
                {#each currentQ.options as optText, idx}
                    {@const isCorrect = idx === currentQ.correct}
                    {@const isSelected = selectedOptionIdx === idx}

                    <button
                        disabled={hasAnswered}
                        class="bg-[var(--surface-dark)] border border-[var(--border-glass)] rounded-[var(--radius-md)] py-5 px-6 text-[var(--text-primary)] font-[var(--font-sans)] text-base text-left cursor-pointer transition-all duration-200 flex justify-between items-center active:not-disabled:scale-[0.98] active:not-disabled:bg-white/5 disabled:opacity-80 sm:p-4 sm:text-[0.95rem] hover:not-disabled:border-white/20"
                        class:!bg-[rgba(16,185,129,0.15)]={hasAnswered &&
                            isCorrect}
                        class:!border-[var(--accent-success)]={hasAnswered &&
                            isCorrect}
                        class:!text-white={hasAnswered && isCorrect}
                        class:!bg-[rgba(239,68,68,0.15)]={hasAnswered &&
                            isSelected &&
                            !isCorrect}
                        class:!border-[var(--accent-error)]={hasAnswered &&
                            isSelected &&
                            !isCorrect}
                        onclick={() => selectOption(idx, currentQ.correct)}
                    >
                        {optText}
                        {#if hasAnswered && isCorrect}
                            <span class="text-[var(--accent-success)] font-bold"
                                >✓</span
                            >
                        {:else if hasAnswered && isSelected && !isCorrect}
                            <span class="text-[var(--accent-error)] font-bold"
                                >✕</span
                            >
                        {/if}
                    </button>
                {/each}
            </div>

            {#if hasAnswered}
                <div
                    class="bg-[var(--surface-dark)] border border-[var(--border-glass)] border-l-[3px] border-l-[var(--accent-secondary)] p-5 rounded-[0_var(--radius-sm)_var(--radius-sm)_0] mb-8 animate-[slideDown_0.3s_ease]"
                >
                    <p class="m-0 text-[0.95rem] text-[var(--text-secondary)]">
                        <strong class="text-white font-medium"
                            >Explanation:</strong
                        >
                        {currentQ.explanation}
                    </p>
                </div>
                <button
                    class="w-full bg-[var(--accent-primary)] text-white border-0 py-4 px-8 rounded-[var(--radius-sm)] font-semibold text-[1.05rem] cursor-pointer transition-all duration-200 shadow-[0_4px_15px_var(--accent-glow)] hover:bg-[#2563eb] active:scale-95"
                    onclick={nextQuestion}
                >
                    {currentQIndex === currentQuestions.length - 1
                        ? "View Results"
                        : "Next Question"}
                </button>
            {/if}
        </div>
    {:else if viewState === "result"}
        {@const percentage = Math.round(
            (score / currentQuestions.length) * 100,
        )}
        <div
            class="text-center py-8 flex flex-col items-center animate-[fadeIn_0.5s_ease]"
        >
            <div class="w-[150px] h-[150px] mb-8 relative">
                <svg
                    viewBox="0 0 36 36"
                    class="block mx-auto max-w-[80%] max-h-[250px]"
                >
                    <path
                        class="fill-none stroke-[rgba(255,255,255,0.05)] stroke-[2.5]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                        class="fill-none stroke-[2.5] stroke-linecap-round transition-[stroke-dasharray] duration-[1500ms] ease-out"
                        style="stroke-dasharray: {strokeDasharray}; stroke: {strokeColor};"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text
                        x="18"
                        y="20.35"
                        class="fill-white font-[var(--font-sans)] text-[0.5em] text-center font-bold"
                        style="text-anchor: middle;">{percentage}%</text
                    >
                </svg>
            </div>
            <h3 class="text-[1.75rem] text-white mb-2">{title} Complete</h3>
            <p class="text-[1.1rem] mb-10 text-[var(--text-secondary)]">
                You scored {score} out of {currentQuestions.length}
            </p>

            <button
                class="w-full sm:w-auto min-w-[200px] bg-[var(--accent-primary)] text-white border-0 py-4 px-8 rounded-[var(--radius-sm)] font-semibold text-[1.05rem] cursor-pointer transition-all duration-200 shadow-[0_4px_15px_var(--accent-glow)] hover:bg-[#2563eb] active:scale-95"
                onclick={resetQuiz}
            >
                Retry {title}
            </button>
        </div>
    {/if}
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
