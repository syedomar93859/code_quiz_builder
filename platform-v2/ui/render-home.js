import { createElementWithClass_platform_v2 } from './dom-factory.js';

export function renderHomeScreen_platform_v2(
  rootElement_platform_v2,
  appState_platform_v2,
  callbacks_platform_v2
) {
  rootElement_platform_v2.innerHTML = '';

  const shell_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-shell-v2'
  );

  const header_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-header-v2',
    `
      <h1 class="platform-title-v2">Code Quiz Platform</h1>
      <p class="platform-subtitle-v2">
        Scalable quiz generation now, scalable question building next.
      </p>
    `
  );

  const main_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-main-v2'
  );

  const setupCard_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-card-v2'
  );

  setupCard_platform_v2.innerHTML = `
    <h2 class="platform-section-title-v2">Create Quiz</h2>

    <div class="platform-grid-v2">
      <div>
        <label class="platform-label-v2">Languages</label>
        <div
          class="platform-button-row-v2"
          id="languageButtonContainer_platform_v2"
        ></div>
      </div>

      <div>
        <label class="platform-label-v2" for="numberOfQuestions_platform_v2">
          Number of Questions
        </label>
        <input
          class="platform-input-v2"
          type="number"
          id="numberOfQuestions_platform_v2"
          min="1"
          max="50"
          value="5"
        >
      </div>

      <div>
        <label class="platform-label-v2" for="triesPerQuestion_platform_v2">
          Tries Per Question
        </label>
        <input
          class="platform-input-v2"
          type="number"
          id="triesPerQuestion_platform_v2"
          min="1"
          max="10"
          value="3"
        >
      </div>

      <div>
        <label class="platform-label-v2" for="difficultySelection_platform_v2">
          Difficulty
        </label>
        <select
          class="platform-select-v2"
          id="difficultySelection_platform_v2"
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div>
        <label class="platform-label-v2" for="typeSelection_platform_v2">
          Question Type
        </label>
        <select
          class="platform-select-v2"
          id="typeSelection_platform_v2"
        >
          <option value="all">All</option>
          <option value="written">Written</option>
          <option value="multiple_choice">Multiple Choice</option>
        </select>
      </div>
    </div>

    <div class="platform-divider-v2"></div>

    <div class="platform-inline-v2">
      <button
        class="platform-button-v2 platform-button-primary-v2"
        id="startQuizButton_platform_v2"
      >
        Start Quiz
      </button>

      <button
        class="platform-button-v2"
        id="openBuilderButton_platform_v2"
      >
        Open Question Builder
      </button>
    </div>
  `;

  const languageButtonContainer_platform_v2 =
    setupCard_platform_v2.querySelector(
      '#languageButtonContainer_platform_v2'
    );

  ['Python', 'Java', 'C'].forEach((language_platform_v2) => {
    const button_platform_v2 = createElementWithClass_platform_v2(
      'button',
      'platform-button-v2',
      language_platform_v2
    );

    if (appState_platform_v2.selectedLanguages.has(language_platform_v2)) {
      button_platform_v2.classList.add('platform-button-active-v2');
    }

    button_platform_v2.addEventListener('click', () => {
      callbacks_platform_v2.onToggleLanguage(language_platform_v2);
    });

    languageButtonContainer_platform_v2.appendChild(button_platform_v2);
  });

  setupCard_platform_v2
    .querySelector('#startQuizButton_platform_v2')
    .addEventListener('click', () => {
      callbacks_platform_v2.onStartQuiz({
        numberOfQuestions: Number(
          setupCard_platform_v2.querySelector(
            '#numberOfQuestions_platform_v2'
          ).value
        ),
        triesPerQuestion: Number(
          setupCard_platform_v2.querySelector(
            '#triesPerQuestion_platform_v2'
          ).value
        ),
        difficulty: setupCard_platform_v2.querySelector(
          '#difficultySelection_platform_v2'
        ).value,
        type: setupCard_platform_v2.querySelector(
          '#typeSelection_platform_v2'
        ).value
      });
    });

  setupCard_platform_v2
    .querySelector('#openBuilderButton_platform_v2')
    .addEventListener('click', () => {
      callbacks_platform_v2.onOpenBuilder();
    });

  main_platform_v2.appendChild(setupCard_platform_v2);
  shell_platform_v2.appendChild(header_platform_v2);
  shell_platform_v2.appendChild(main_platform_v2);
  rootElement_platform_v2.appendChild(shell_platform_v2);
}