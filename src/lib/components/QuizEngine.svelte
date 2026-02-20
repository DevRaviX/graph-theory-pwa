<script>
    import { syllabusNotes } from "$lib/data.js";

    /** @type {{ title: string, dataSource: any[] }} */
    let { title, dataSource } = $props();

    /** @type {string|null} */
    let selectedUnit = $state(null);
    /** @type {any[]} */
    let currentQuestions = $state([]);
    let currentQIndex = $state(0);
    let score = $state(0);

    /** @type {'setup' | 'active' | 'result'} */
    let viewState = $state("setup");

    let hasAnswered = $state(false);
    let selectedOption = $state(-1);

    // Animated progress ring state
    let ringDasharray = $state("0 100");
    let ringColor = $state("#3B82F6");

    // Option letters
    const LETTERS = ["A", "B", "C", "D", "E"];

    // Per-unit color palette (mirrors LectureCard)
    const unitAccents = {
        "Unit I": "#38BDF8",
        "Unit II": "#A78BFA",
        "Unit III": "#34D399",
        "Unit IV": "#FCD34D",
        "Unit V": "#FB7185",
    };

    const getUnitTitle = (/** @type {string} */ unitName) => {
        const u = syllabusNotes.find((x) => x.unit === unitName);
        if (u) return u.title;
        if (unitName === "Unit VI") return "BFS & DFS (Exam)";
        return unitName;
    };

    /** @param {string} unitName */
    const getAccentColor = (unitName) => {
        return (
            unitAccents[/** @type {keyof typeof unitAccents} */ (unitName)] ??
            "#3B82F6"
        );
    };

    const accent = $derived(
        selectedUnit ? getAccentColor(selectedUnit) : "#3B82F6",
    );

    // Progress 0–1
    const progress = $derived(
        currentQuestions.length > 0
            ? currentQIndex / currentQuestions.length
            : 0,
    );

    function startQuiz() {
        if (!selectedUnit) return;
        const unitData = dataSource.find((u) => u.unit === selectedUnit);
        if (unitData?.questions?.length > 0) {
            currentQuestions = [...unitData.questions];
            currentQIndex = 0;
            score = 0;
            hasAnswered = false;
            selectedOption = -1;
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
        selectedOption = idx;
        if (idx === correctIdx) score++;

        if (typeof window !== "undefined") {
            setTimeout(async () => {
                if (/** @type {any} */ (window).MathJax) {
                    await /** @type {any} */ (window).MathJax.typesetPromise();
                }
                if (/** @type {any} */ (window).mermaid) {
                    try {
                        await /** @type {any} */ (window).mermaid.run({
                            querySelector: ".mermaid",
                        });
                    } catch (e) {
                        console.error("Mermaid error:", e);
                    }
                }
                // Scroll next button into view
                setTimeout(() => {
                    document.getElementById("next-btn")?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
                }, 100);
            }, 50);
        }
    }

    function nextQuestion() {
        currentQIndex++;
        hasAnswered = false;
        selectedOption = -1;

        if (currentQIndex >= currentQuestions.length) {
            viewState = "result";
            setTimeout(animateRing, 120);
        } else {
            if (typeof window !== "undefined") {
                // Scroll to top
                document
                    .querySelector(".main-scroll")
                    ?.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    }

    function resetQuiz() {
        viewState = "setup";
        selectedUnit = null;
        ringDasharray = "0 100";
    }

    function animateRing() {
        const pct = Math.round((score / currentQuestions.length) * 100);
        ringDasharray = `${pct} 100`;
        if (pct >= 80) ringColor = "#10B981";
        else if (pct < 50) ringColor = "#F43F5E";
        else ringColor = "#3B82F6";
    }

    // Determine result grade text + color
    const resultGrade = $derived(() => {
        if (!currentQuestions.length) return { label: "", color: "#3B82F6" };
        const pct = Math.round((score / currentQuestions.length) * 100);
        if (pct >= 80) return { label: "Excellent! 🎉", color: "#10B981" };
        if (pct >= 60) return { label: "Good Work 👍", color: "#3B82F6" };
        if (pct >= 40) return { label: "Keep Practicing", color: "#F59E0B" };
        return { label: "Needs Review", color: "#F43F5E" };
    });
</script>

<div>
    <!-- ═══════════════════════════════════════
         SETUP SCREEN
    ════════════════════════════════════════ -->
    {#if viewState === "setup"}
        <div class="quiz-setup">
            <div class="quiz-setup-header">
                <span class="quiz-mode-label">
                    {title === "Practice Mode" ? "🎯 Practice" : "📝 Exam"}
                </span>
                <h2 class="quiz-setup-title">Select a Unit</h2>
                <p class="quiz-setup-sub">
                    {title === "Practice Mode"
                        ? "Practice questions with detailed explanations"
                        : "Timed exam-style questions to test your knowledge"}
                </p>
            </div>

            <div class="unit-grid stagger">
                {#each dataSource as mcqData (mcqData.unit)}
                    {@const ac = getAccentColor(mcqData.unit)}
                    <button
                        class="unit-btn anim-fade-up"
                        class:selected={selectedUnit === mcqData.unit}
                        style="--unit-accent: {ac};"
                        onclick={() => (selectedUnit = mcqData.unit)}
                        aria-pressed={selectedUnit === mcqData.unit}
                    >
                        <!-- Subtle left accent bar -->
                        <div
                            style="
                            position:absolute; left:0; top:0; bottom:0;
                            width:3px;
                            background:{ac};
                            border-radius: 99px 0 0 99px;
                            opacity: {selectedUnit === mcqData.unit ? 1 : 0};
                            transition: opacity 0.2s;
                        "
                        ></div>

                        <span class="unit-btn-badge" style="color:{ac};"
                            >{mcqData.unit}</span
                        >
                        <span class="unit-btn-title"
                            >{getUnitTitle(mcqData.unit)}</span
                        >

                        <!-- Question count badge -->
                        {#if mcqData.questions?.length}
                            <span
                                style="
                                display:inline-block;
                                margin-top:8px;
                                font-size:0.68rem;
                                font-weight:600;
                                color: var(--tx-lo);
                            "
                            >
                                {mcqData.questions.length} questions
                            </span>
                        {/if}

                        {#if selectedUnit === mcqData.unit}
                            <div class="unit-btn-check">
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="3.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        {/if}
                    </button>
                {/each}
            </div>

            <button
                class="start-btn"
                disabled={!selectedUnit}
                onclick={startQuiz}
            >
                Start {title}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="display:inline;margin-left:6px;vertical-align:-2px"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </button>
        </div>

        <!-- ═══════════════════════════════════════
         ACTIVE QUIZ SCREEN
    ════════════════════════════════════════ -->
    {:else if viewState === "active"}
        {@const currentQ = currentQuestions[currentQIndex]}
        {@const ac = getAccentColor(selectedUnit ?? "Unit I")}

        <div class="quiz-active">
            <!-- Progress bar -->
            <div
                class="quiz-progress-bar"
                role="progressbar"
                aria-valuenow={currentQIndex}
                aria-valuemax={currentQuestions.length}
            >
                <div
                    class="quiz-progress-fill"
                    style="width: {(currentQIndex / currentQuestions.length) *
                        100}%; background: linear-gradient(90deg, {ac}, {ac}99);"
                ></div>
            </div>

            <!-- Top bar: counter + unit tag -->
            <div class="quiz-topbar">
                <span class="quiz-counter">
                    {currentQIndex + 1} / {currentQuestions.length}
                </span>
                <span class="quiz-unit-tag" style="color:{ac};">
                    {selectedUnit}
                </span>
            </div>

            <!-- Question -->
            <p class="quiz-question">{currentQ.question}</p>

            <!-- Options -->
            <div class="options-list">
                {#each currentQ.options as optText, idx}
                    {@const isCorrect = idx === currentQ.correct}
                    {@const isSelected = selectedOption === idx}
                    {@const showCorrect = hasAnswered && isCorrect}
                    {@const showWrong = hasAnswered && isSelected && !isCorrect}
                    {@const isDimmed = hasAnswered && !isCorrect && !isSelected}

                    <button
                        class="option-btn"
                        class:correct={showCorrect}
                        class:wrong={showWrong}
                        class:dimmed={isDimmed}
                        disabled={hasAnswered}
                        onclick={() => selectOption(idx, currentQ.correct)}
                        aria-label="Option {LETTERS[idx]}: {optText}"
                    >
                        <!-- Letter badge -->
                        <span class="option-letter">{LETTERS[idx]}</span>

                        <!-- Text -->
                        <span class="option-text">{optText}</span>

                        <!-- Status icon (shown after answer) -->
                        {#if showCorrect}
                            <span class="option-icon" aria-label="Correct">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#10B981"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                    />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </span>
                        {:else if showWrong}
                            <span class="option-icon" aria-label="Incorrect">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#F43F5E"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </span>
                        {/if}
                    </button>
                {/each}
            </div>

            <!-- Explanation (after answering) -->
            {#if hasAnswered}
                <div class="explanation-box">
                    <p class="explanation-label">
                        {selectedOption === currentQ.correct
                            ? "✓ Correct"
                            : "✗ Incorrect"} — Explanation
                    </p>
                    <div class="explanation-text">
                        {@html currentQ.explanation}
                    </div>
                </div>

                <button id="next-btn" class="next-btn" onclick={nextQuestion}>
                    {currentQIndex === currentQuestions.length - 1
                        ? "View Results"
                        : "Next Question"}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            {/if}
        </div>

        <!-- ═══════════════════════════════════════
         RESULT SCREEN
    ════════════════════════════════════════ -->
    {:else if viewState === "result"}
        {@const pct = Math.round((score / currentQuestions.length) * 100)}
        {@const grade = resultGrade()}

        <div class="quiz-result">
            <!-- Animated score ring -->
            <div class="score-ring-wrap" aria-label="{pct}% score">
                <svg viewBox="0 0 36 36" width="160" height="160" role="img">
                    <!-- Track -->
                    <path
                        class="score-ring-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        stroke-width="2.8"
                    />
                    <!-- Fill -->
                    <path
                        class="score-ring-fill"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={ringColor}
                        stroke-width="2.8"
                        stroke-linecap="round"
                        stroke-dasharray={ringDasharray}
                        style="transform: rotate(-90deg); transform-origin: 18px 18px;"
                    />
                </svg>
                <div class="score-pct-text" style="color:{ringColor};">
                    {pct}%
                </div>
            </div>

            <!-- Grade label -->
            <span
                class="result-score-pill"
                style="color:{grade.color}; border-color:{grade.color}44; background:{grade.color}12;"
            >
                {grade.label}
            </span>

            <h3 class="result-title">{title} Complete</h3>
            <p class="result-sub">
                You answered {score} of {currentQuestions.length} correctly
            </p>

            <!-- Score breakdown bar -->
            <div
                style="
                width: 100%; max-width: 320px;
                height: 6px;
                background: rgba(255,255,255,0.06);
                border-radius: 3px;
                overflow: hidden;
                margin-bottom: 36px;
            "
            >
                <div
                    style="
                    height: 100%;
                    width: {pct}%;
                    background: {ringColor};
                    border-radius: 3px;
                    transition: width 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s;
                "
                ></div>
            </div>

            <div class="result-actions">
                <button class="retry-btn" onclick={() => startQuiz()}>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style="display:inline;margin-right:7px;vertical-align:-2px"
                    >
                        <polyline points="1 4 1 10 7 10" />
                        <path d="M3.51 15a9 9 0 1 0 .49-3.5" />
                    </svg>
                    Retry This Unit
                </button>
                <button class="back-btn" onclick={resetQuiz}>
                    ← Choose Another Unit
                </button>
            </div>
        </div>
    {/if}
</div>

<style>
    /* Scoped: ensure explanation HTML bold text is white */
    .explanation-text :global(strong) {
        color: #f1f5f9;
    }
    .explanation-text :global(code) {
        font-family: "JetBrains Mono", monospace;
        font-size: 0.82em;
        background: rgba(59, 130, 246, 0.12);
        color: #93c5fd;
        padding: 2px 6px;
        border-radius: 4px;
    }
</style>
