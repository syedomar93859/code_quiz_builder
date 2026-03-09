import { createElementWithClass_platform_v2 } from './dom-factory.js';

export function renderResultsScreen_platform_v2(
  rootElement_platform_v2,
  quizSession_platform_v2,
  callbacks_platform_v2
) {
  rootElement_platform_v2.innerHTML = '';

  const shell_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-shell-v2'
  );

  const main_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-main-v2'
  );

  const resultsCard_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-card-v2'
  );

  resultsCard_platform_v2.innerHTML = `
    <h2 class="platform-section-title-v2">Quiz Complete</h2>

    <div class="platform-grid-v2">
      <div class="platform-stat-box-v2">
        <div>Total Score</div>
        <div class="platform-stat-number-v2">
          ${quizSession_platform_v2.totalScore.toFixed(2)} /
          ${quizSession_platform_v2.questions.length.toFixed(2)}
        </div>
      </div>

      <div class="platform-stat-box-v2">
        <div>Questions</div>
        <div class="platform-stat-number-v2">
          ${quizSession_platform_v2.questions.length}
        </div>
      </div>
    </div>

    <div class="platform-divider-v2"></div>

    <h3>Question Summary</h3>
    <div id="resultsSummary_platform_v2"></div>

    <div class="platform-inline-v2" style="margin-top: 18px;">
      <button
        class="platform-button-v2 platform-button-primary-v2"
        id="resultsHomeButton_platform_v2"
      >
        Back Home
      </button>
    </div>
  `;

  const resultsSummary_platform_v2 = resultsCard_platform_v2.querySelector(
    '#resultsSummary_platform_v2'
  );

  quizSession_platform_v2.questions.forEach(
    (questionRecord_platform_v2, index_platform_v2) => {
      const progress_platform_v2 =
        quizSession_platform_v2.progress[questionRecord_platform_v2.id];

      const row_platform_v2 = createElementWithClass_platform_v2(
        'div',
        'platform-stat-box-v2',
        `
          <strong>
            Q${index_platform_v2 + 1}. ${questionRecord_platform_v2.language} - ${questionRecord_platform_v2.type.replace('_', ' ')}
          </strong>
          <div style="margin-top: 8px;">
            Solved: ${progress_platform_v2.solved ? 'Yes' : 'No'}
          </div>
          <div>Attempts Used: ${progress_platform_v2.attemptsUsed}</div>
          <div>Points Earned: ${progress_platform_v2.pointsEarned}</div>
        `
      );

      resultsSummary_platform_v2.appendChild(row_platform_v2);
    }
  );

  resultsCard_platform_v2
    .querySelector('#resultsHomeButton_platform_v2')
    .addEventListener('click', () => {
      callbacks_platform_v2.onGoHome();
    });

  main_platform_v2.appendChild(resultsCard_platform_v2);
  shell_platform_v2.appendChild(main_platform_v2);
  rootElement_platform_v2.appendChild(shell_platform_v2);
}