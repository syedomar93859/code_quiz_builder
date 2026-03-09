import { createElementWithClass_platform_v2 } from './dom-factory.js';
import { calculateRemainingTries_platform_v2 } from '../core/scorer.js';
import { revealCorrectAnswer_platform_v2 } from '../core/validator.js';

export function renderQuizScreen_platform_v2(
  rootElement_platform_v2,
  quizSession_platform_v2,
  callbacks_platform_v2
) {
  rootElement_platform_v2.innerHTML = '';

  const activeQuestion_platform_v2 =
    quizSession_platform_v2.questions[
      quizSession_platform_v2.currentQuestionIndex
    ];

  const activeProgress_platform_v2 =
    quizSession_platform_v2.progress[activeQuestion_platform_v2.id];

  const remainingTries_platform_v2 = calculateRemainingTries_platform_v2(
    quizSession_platform_v2.settings.triesPerQuestion,
    activeProgress_platform_v2.attemptsUsed
  );

  const shell_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-shell-v2'
  );

  const main_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-main-v2'
  );

  const quizCard_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-quiz-card-v2'
  );

  quizCard_platform_v2.innerHTML = `
    <h2 class="platform-section-title-v2">
      Question ${quizSession_platform_v2.currentQuestionIndex + 1}
      of ${quizSession_platform_v2.questions.length}
    </h2>

    <div class="platform-meta-row-v2">
      <span><strong>Language:</strong> ${activeQuestion_platform_v2.language}</span>
      <span><strong>Type:</strong> ${activeQuestion_platform_v2.type.replace('_', ' ')}</span>
      <span><strong>Difficulty:</strong> ${activeQuestion_platform_v2.difficulty}</span>
      <span><strong>Tries Left:</strong> ${remainingTries_platform_v2}</span>
    </div>

    <div class="platform-question-prompt-v2">
      ${activeQuestion_platform_v2.prompt}
    </div>

    <div id="questionInteractionArea_platform_v2"></div>
    <div id="questionFeedback_platform_v2"></div>

    <div class="platform-inline-v2" style="margin-top: 18px;">
      <button class="platform-button-v2" id="goHomeButton_platform_v2">
        Back Home
      </button>

      <button
        class="platform-button-v2 platform-hidden-v2"
        id="nextQuestionButton_platform_v2"
      >
        Next Question
      </button>

      <button
        class="platform-button-v2 platform-hidden-v2"
        id="resultsButton_platform_v2"
      >
        View Results
      </button>
    </div>
  `;

  const interactionArea_platform_v2 = quizCard_platform_v2.querySelector(
    '#questionInteractionArea_platform_v2'
  );

  const feedbackContainer_platform_v2 = quizCard_platform_v2.querySelector(
    '#questionFeedback_platform_v2'
  );

  const nextQuestionButton_platform_v2 = quizCard_platform_v2.querySelector(
    '#nextQuestionButton_platform_v2'
  );

  const resultsButton_platform_v2 = quizCard_platform_v2.querySelector(
    '#resultsButton_platform_v2'
  );

  if (activeQuestion_platform_v2.type === 'written') {
    const input_platform_v2 = createElementWithClass_platform_v2(
      'input',
      'platform-input-v2'
    );
    input_platform_v2.placeholder = 'Enter your answer...';
    input_platform_v2.id = 'writtenAnswerInput_platform_v2';

    const submitButton_platform_v2 = createElementWithClass_platform_v2(
      'button',
      'platform-button-v2 platform-button-primary-v2',
      'Submit Answer'
    );

    submitButton_platform_v2.addEventListener('click', () => {
      callbacks_platform_v2.onSubmitAnswer(input_platform_v2.value);
    });

    interactionArea_platform_v2.appendChild(input_platform_v2);
    interactionArea_platform_v2.appendChild(document.createElement('br'));
    interactionArea_platform_v2.appendChild(document.createElement('br'));
    interactionArea_platform_v2.appendChild(submitButton_platform_v2);
  }

  if (activeQuestion_platform_v2.type === 'multiple_choice') {
    const optionList_platform_v2 = createElementWithClass_platform_v2(
      'div',
      'platform-option-list-v2'
    );

    let selectedChoice_platform_v2 = '';

    activeQuestion_platform_v2.options.forEach(
      (option_platform_v2, optionIndex_platform_v2) => {
        const optionWrapper_platform_v2 = createElementWithClass_platform_v2(
          'label',
          'platform-option-item-v2'
        );

        const radio_platform_v2 = document.createElement('input');
        radio_platform_v2.type = 'radio';
        radio_platform_v2.name = 'multipleChoiceSelection_platform_v2';
        radio_platform_v2.value = option_platform_v2;

        radio_platform_v2.addEventListener('change', () => {
          selectedChoice_platform_v2 = option_platform_v2;
        });

        optionWrapper_platform_v2.appendChild(radio_platform_v2);
        optionWrapper_platform_v2.insertAdjacentHTML(
          'beforeend',
          ` <strong>${String.fromCharCode(65 + optionIndex_platform_v2)}.</strong> ${option_platform_v2}`
        );

        optionList_platform_v2.appendChild(optionWrapper_platform_v2);
      }
    );

    const submitButton_platform_v2 = createElementWithClass_platform_v2(
      'button',
      'platform-button-v2 platform-button-primary-v2',
      'Submit Answer'
    );

    submitButton_platform_v2.addEventListener('click', () => {
      callbacks_platform_v2.onSubmitAnswer(selectedChoice_platform_v2);
    });

    interactionArea_platform_v2.appendChild(optionList_platform_v2);
    interactionArea_platform_v2.appendChild(submitButton_platform_v2);
  }

  if (activeProgress_platform_v2.finished) {
    const correctAnswer_platform_v2 =
      revealCorrectAnswer_platform_v2(activeQuestion_platform_v2);

    const finalMessage_platform_v2 = createElementWithClass_platform_v2(
      'div',
      activeProgress_platform_v2.solved
        ? 'platform-feedback-v2 platform-feedback-success-v2'
        : 'platform-feedback-v2 platform-feedback-danger-v2',
      activeProgress_platform_v2.solved
        ? `Correct. Points earned: ${activeProgress_platform_v2.pointsEarned}. Correct answer: ${correctAnswer_platform_v2}`
        : `Question locked. Correct answer: ${correctAnswer_platform_v2}`
    );

    feedbackContainer_platform_v2.appendChild(finalMessage_platform_v2);

    if (
      quizSession_platform_v2.currentQuestionIndex <
      quizSession_platform_v2.questions.length - 1
    ) {
      nextQuestionButton_platform_v2.classList.remove('platform-hidden-v2');
    } else {
      resultsButton_platform_v2.classList.remove('platform-hidden-v2');
    }
  }

  quizCard_platform_v2
    .querySelector('#goHomeButton_platform_v2')
    .addEventListener('click', () => {
      callbacks_platform_v2.onGoHome();
    });

  nextQuestionButton_platform_v2.addEventListener('click', () => {
    callbacks_platform_v2.onNextQuestion();
  });

  resultsButton_platform_v2.addEventListener('click', () => {
    callbacks_platform_v2.onShowResults();
  });

  main_platform_v2.appendChild(quizCard_platform_v2);
  shell_platform_v2.appendChild(main_platform_v2);
  rootElement_platform_v2.appendChild(shell_platform_v2);
}