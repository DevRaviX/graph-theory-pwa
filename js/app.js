import { syllabusNotes, practiceMCQs, examMCQs } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- App Initialization ---
    initServiceWorker();
    initPWAInstall();
    initTabs();
    renderLectureUnits();
    initQuizSetup();
    initExamSetup();

    // --- 1. Service Worker Initialization ---
    function initServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // --- 1.5 PWA Install Logic ---
    function initPWAInstall() {
        let deferredPrompt;
        const installBtn = document.getElementById('install-app-btn');

        if (!installBtn) return;

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI to notify the user they can add to home screen
            installBtn.classList.remove('hidden');

            installBtn.addEventListener('click', () => {
                // hide our user interface that shows our A2HS button
                installBtn.classList.add('hidden');
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
            });
        });

        window.addEventListener('appinstalled', (evt) => {
            console.log('App was installed.');
            installBtn.classList.add('hidden');
        });
    }

    // --- 2. Tab Navigation Logic ---
    function initTabs() {
        const tabs = document.querySelectorAll('.nav-tab');
        const modules = document.querySelectorAll('.module-view');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all
                tabs.forEach(t => t.classList.remove('active'));
                modules.forEach(m => m.classList.remove('active', 'hidden'));
                modules.forEach(m => m.style.display = 'none'); // Ensure flush

                // Add active to clicked
                tab.classList.add('active');
                const targetId = tab.getAttribute('data-target');
                const targetModule = document.getElementById(targetId);

                targetModule.classList.add('active');
                targetModule.style.display = 'block';

                // Trigger MathJax re-render if Lecture tab is opened
                if (targetId === 'lecture-module' && window.MathJax) {
                    MathJax.typesetPromise();
                }
            });
        });
    }

    // --- 3. Lecture Formatting Logic ---
    function renderLectureUnits() {
        const container = document.getElementById('lecture-units');
        container.innerHTML = '';

        syllabusNotes.forEach((unitData, index) => {
            // Create Unit Card
            const card = document.createElement('div');
            card.className = 'unit-card';

            // Header
            const header = document.createElement('div');
            header.className = 'unit-header';
            header.innerHTML = `
        <div class="unit-info">
          <span class="unit-badge">${unitData.unit}</span>
          <h2>${unitData.title}</h2>
        </div>
        <div class="unit-toggle-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      `;

            // Content area
            const content = document.createElement('div');
            content.className = 'unit-content';

            // Determine contents
            let topicsHTML = '';
            unitData.topics.forEach(topic => {
                topicsHTML += `
           <div class="topic-section">
             <h3>${topic.title}</h3>
             <div class="topic-content">
               ${topic.content}
             </div>
           </div>
         `;
            });
            content.innerHTML = topicsHTML;

            card.appendChild(header);
            card.appendChild(content);

            // Setup expand/collapse logic
            header.addEventListener('click', () => {
                const isExpanded = card.classList.contains('expanded');

                // Optional: close other cards like an accordion
                // document.querySelectorAll('.unit-card').forEach(c => c.classList.remove('expanded'));

                if (!isExpanded) {
                    card.classList.add('expanded');
                } else {
                    card.classList.remove('expanded');
                }
            });

            container.appendChild(card);
        });

        // Attempt MathJax Process after rendering if available
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }


    // --- 4. Practice/Quiz Logic ---
    let selectedUnitForQuiz = null;
    let currentQuestions = [];
    let currentQIndex = 0;
    let score = 0;

    const quizSetup = document.getElementById('quiz-setup');
    const quizActive = document.getElementById('quiz-active');
    const quizResult = document.getElementById('quiz-result');

    function initQuizSetup() {
        const unitSelectorContainer = document.getElementById('quiz-unit-selectors');
        const startBtn = document.getElementById('start-quiz-btn');

        // Clear existing
        unitSelectorContainer.innerHTML = '';

        // Create selection buttons dynamically based on available MCQ data
        practiceMCQs.forEach(mcqData => {
            const btn = document.createElement('button');
            btn.className = 'unit-select-btn';
            btn.textContent = mcqData.unit;

            btn.addEventListener('click', () => {
                // Deselect all
                document.querySelectorAll('.unit-select-btn').forEach(b => b.classList.remove('selected'));
                // Select this
                btn.classList.add('selected');
                selectedUnitForQuiz = mcqData.unit;
                startBtn.disabled = false;
            });

            unitSelectorContainer.appendChild(btn);
        });

        // Start Quiz Handle
        startBtn.addEventListener('click', () => {
            if (!selectedUnitForQuiz) return;

            // Load questions for selected unit
            const unitData = practiceMCQs.find(u => u.unit === selectedUnitForQuiz);
            if (unitData && unitData.questions.length > 0) {
                // Ensure random order using array sorting
                currentQuestions = [...unitData.questions];

                // Reset state
                currentQIndex = 0;
                score = 0;

                // Transition Views
                quizSetup.classList.add('hidden');
                quizActive.classList.remove('hidden');

                // Render first question
                renderQuestion();
            }
        });

        // Handle next button & restart
        document.getElementById('next-question-btn').addEventListener('click', handleNextQuestion);
        document.getElementById('restart-quiz-btn').addEventListener('click', resetQuiz);
    }

    function renderQuestion() {
        const qData = currentQuestions[currentQIndex];

        // Update headers
        document.getElementById('quiz-progress').textContent = `Question ${currentQIndex + 1}/${currentQuestions.length}`;
        document.getElementById('quiz-unit-label').textContent = selectedUnitForQuiz;
        document.getElementById('question-text').textContent = qData.question;

        // Setup Options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        qData.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = optText;

            btn.addEventListener('click', () => handleOptionSelect(btn, idx, qData.correct));
            optionsContainer.appendChild(btn);
        });

        // Hide extra elements
        document.getElementById('explanation-box').classList.add('hidden');
        document.getElementById('next-question-btn').classList.add('hidden');
    }

    function handleOptionSelect(selectedBtn, selectedIdx, correctIdx) {
        // Disable all options
        const allOptions = document.querySelectorAll('.option-btn');
        allOptions.forEach(btn => btn.disabled = true);

        const isCorrect = (selectedIdx === correctIdx);

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            score++;
        } else {
            selectedBtn.classList.add('wrong');
            // Highlight correct option as well
            allOptions[correctIdx].classList.add('correct');
        }

        // Show Explanation
        const expBox = document.getElementById('explanation-box');
        const qData = currentQuestions[currentQIndex];
        expBox.innerHTML = `<p><strong>Explanation:</strong> ${qData.explanation}</p>`;
        expBox.classList.remove('hidden');

        // Show Next Button
        const nextBtn = document.getElementById('next-question-btn');
        const isLastQuestion = (currentQIndex === currentQuestions.length - 1);
        nextBtn.textContent = isLastQuestion ? 'View Results' : 'Next Question';
        nextBtn.classList.remove('hidden');
    }

    function handleNextQuestion() {
        currentQIndex++;
        if (currentQIndex < currentQuestions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizActive.classList.add('hidden');
        quizResult.classList.remove('hidden');

        const percentage = Math.round((score / currentQuestions.length) * 100);

        document.getElementById('score-details').textContent = `You scored ${score} out of ${currentQuestions.length}`;
        document.getElementById('score-text').textContent = `${percentage}%`;

        // Animate circular gauge
        setTimeout(() => {
            const circle = document.getElementById('score-circle-path');
            circle.setAttribute('stroke-dasharray', `${percentage}, 100`);

            // Color coding based on score
            const svgContainer = document.querySelector('.circular-chart');
            svgContainer.classList.remove('primary'); // default logic if we had other colors
            if (percentage >= 80) {
                circle.style.stroke = 'var(--accent-success)';
            } else if (percentage < 50) {
                circle.style.stroke = 'var(--accent-error)';
            } else {
                circle.style.stroke = 'var(--accent-primary)';
            }
        }, 100); // small delay to ensure rendering before animation
    }

    function resetQuiz() {
        quizResult.classList.add('hidden');
        quizSetup.classList.remove('hidden');

        // Reset selections
        document.querySelectorAll('.unit-select-btn').forEach(b => b.classList.remove('selected'));
        document.getElementById('start-quiz-btn').disabled = true;
        selectedUnitForQuiz = null;

        // Reset gauge visual
        const circle = document.getElementById('score-circle-path');
        circle.setAttribute('stroke-dasharray', `0, 100`);
        circle.style.stroke = 'var(--accent-primary)';
    }

    // --- 5. Exam Mode Logic ---
    let selectedUnitForExam = null;
    let currentExamQuestions = [];
    let currentExamQIndex = 0;
    let examScore = 0;

    const examSetup = document.getElementById('exam-setup');
    const examActive = document.getElementById('exam-active');
    const examResult = document.getElementById('exam-result');

    function initExamSetup() {
        const unitSelectorContainer = document.getElementById('exam-unit-selectors');
        const startBtn = document.getElementById('start-exam-btn');

        if (!unitSelectorContainer) return;

        // Clear existing
        unitSelectorContainer.innerHTML = '';

        // Create selection buttons dynamically based on available MCQ data
        if (typeof examMCQs !== 'undefined' && examMCQs) {
            examMCQs.forEach(mcqData => {
                const btn = document.createElement('button');
                btn.className = 'unit-select-btn';
                btn.textContent = mcqData.unit;

                btn.addEventListener('click', () => {
                    // Deselect all
                    unitSelectorContainer.querySelectorAll('.unit-select-btn').forEach(b => b.classList.remove('selected'));
                    // Select this
                    btn.classList.add('selected');
                    selectedUnitForExam = mcqData.unit;
                    startBtn.disabled = false;
                });

                unitSelectorContainer.appendChild(btn);
            });
        }

        // Start Exam Handle
        startBtn.addEventListener('click', () => {
            if (!selectedUnitForExam) return;

            // Load questions for selected unit
            const unitData = examMCQs.find(u => u.unit === selectedUnitForExam);
            if (unitData && unitData.questions.length > 0) {
                currentExamQuestions = [...unitData.questions];

                // Reset state
                currentExamQIndex = 0;
                examScore = 0;

                // Transition Views
                examSetup.classList.add('hidden');
                examActive.classList.remove('hidden');

                // Render first question
                renderExamQuestion();
            }
        });

        // Handle next button & restart
        const nextExamBtn = document.getElementById('next-exam-btn');
        const restartExamBtn = document.getElementById('restart-exam-btn');
        if (nextExamBtn) nextExamBtn.addEventListener('click', handleNextExamQuestion);
        if (restartExamBtn) restartExamBtn.addEventListener('click', resetExam);
    }

    function renderExamQuestion() {
        const qData = currentExamQuestions[currentExamQIndex];

        // Update headers
        document.getElementById('exam-progress').textContent = `Question ${currentExamQIndex + 1}/${currentExamQuestions.length}`;
        document.getElementById('exam-unit-label').textContent = selectedUnitForExam;
        document.getElementById('exam-question-text').textContent = qData.question;

        // Setup Options
        const optionsContainer = document.getElementById('exam-options-container');
        optionsContainer.innerHTML = '';

        qData.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = optText;

            btn.addEventListener('click', () => handleExamOptionSelect(btn, idx, qData.correct));
            optionsContainer.appendChild(btn);
        });

        // Hide extra elements
        document.getElementById('exam-explanation-box').classList.add('hidden');
        document.getElementById('next-exam-btn').classList.add('hidden');
    }

    function handleExamOptionSelect(selectedBtn, selectedIdx, correctIdx) {
        // Disable all options
        const allOptions = document.getElementById('exam-options-container').querySelectorAll('.option-btn');
        allOptions.forEach(btn => btn.disabled = true);

        const isCorrect = (selectedIdx === correctIdx);

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            examScore++;
        } else {
            selectedBtn.classList.add('wrong');
            // Highlight correct option as well
            if (allOptions[correctIdx]) allOptions[correctIdx].classList.add('correct');
        }

        // Show Explanation
        const expBox = document.getElementById('exam-explanation-box');
        const qData = currentExamQuestions[currentExamQIndex];
        expBox.innerHTML = `<p><strong>Explanation:</strong> ${qData.explanation}</p>`;
        expBox.classList.remove('hidden');

        // Show Next Button
        const nextBtn = document.getElementById('next-exam-btn');
        const isLastQuestion = (currentExamQIndex === currentExamQuestions.length - 1);
        nextBtn.textContent = isLastQuestion ? 'View Results' : 'Next Question';
        nextBtn.classList.remove('hidden');
    }

    function handleNextExamQuestion() {
        currentExamQIndex++;
        if (currentExamQIndex < currentExamQuestions.length) {
            renderExamQuestion();
        } else {
            showExamResults();
        }
    }

    function showExamResults() {
        examActive.classList.add('hidden');
        examResult.classList.remove('hidden');

        const percentage = Math.round((examScore / currentExamQuestions.length) * 100);

        document.getElementById('exam-score-details').textContent = `You scored ${examScore} out of ${currentExamQuestions.length}`;
        document.getElementById('exam-score-text').textContent = `${percentage}%`;

        // Animate circular gauge
        setTimeout(() => {
            const circle = document.getElementById('exam-score-circle-path');
            circle.setAttribute('stroke-dasharray', `${percentage}, 100`);

            // Color coding based on score
            if (percentage >= 80) {
                circle.style.stroke = 'var(--accent-success)';
            } else if (percentage < 50) {
                circle.style.stroke = 'var(--accent-error)';
            } else {
                circle.style.stroke = 'var(--accent-primary)';
            }
        }, 100);
    }

    function resetExam() {
        examResult.classList.add('hidden');
        examSetup.classList.remove('hidden');

        // Reset selections
        document.getElementById('exam-unit-selectors').querySelectorAll('.unit-select-btn').forEach(b => b.classList.remove('selected'));
        document.getElementById('start-exam-btn').disabled = true;
        selectedUnitForExam = null;

        // Reset gauge visual
        const circle = document.getElementById('exam-score-circle-path');
        circle.setAttribute('stroke-dasharray', `0, 100`);
        circle.style.stroke = 'var(--accent-primary)';
    }

});
