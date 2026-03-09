import { createElementWithClass_platform_v2 } from './dom-factory.js';

export function renderBuilderScreen_platform_v2(
  rootElement_platform_v2,
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

  const builderCard_platform_v2 = createElementWithClass_platform_v2(
    'div',
    'platform-card-v2'
  );

  builderCard_platform_v2.innerHTML = `
    <h2 class="platform-section-title-v2">Question Builder</h2>
    <p class="platform-subtitle-v2">
      This feeds directly into the same data model as the quiz system.
    </p>

    <div class="platform-grid-v2">
      <div>
        <label class="platform-label-v2">Language</label>
        <select class="platform-select-v2" id="builderLanguage_platform_v2">
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C">C</option>
        </select>
      </div>

      <div>
        <label class="platform-label-v2">Question Type</label>
        <select class="platform-select-v2" id="builderType_platform_v2">
          <option value="written">Written</option>
          <option value="multiple_choice">Multiple Choice</option>
        </select>
      </div>

      <div>
        <label class="platform-label-v2">Difficulty</label>
        <select class="platform-select-v2" id="builderDifficulty_platform_v2">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>

    <div class="platform-divider-v2"></div>

    <label class="platform-label-v2">Prompt</label>
    <textarea
      class="platform-textarea-v2"
      id="builderPrompt_platform_v2"
      placeholder="Enter the question prompt..."
    ></textarea>

    <div class="platform-divider-v2"></div>

    <div id="builderDynamicArea_platform_v2"></div>

    <div class="platform-inline-v2" style="margin-top:18px;">
      <button class="platform-button-v2 platform-button-primary-v2" id="saveQuestionButton_platform_v2">
        Save Question
      </button>

      <button class="platform-button-v2" id="builderHomeButton_platform_v2">
        Back Home
      </button>
    </div>
  `;

  const builderType_platform_v2 =
    builderCard_platform_v2.querySelector('#builderType_platform_v2');

  const builderDynamicArea_platform_v2 =
    builderCard_platform_v2.querySelector('#builderDynamicArea_platform_v2');

  function renderDynamicFields_platform_v2() {
    const currentType_platform_v2 = builderType_platform_v2.value;

    if (currentType_platform_v2 === 'written') {
      builderDynamicArea_platform_v2.innerHTML = `
        <label class="platform-label-v2">
          Accepted Answers (one per line)
        </label>

        <textarea
          class="platform-textarea-v2"
          id="builderWrittenAnswers_platform_v2"
        ></textarea>
      `;
      return;
    }

    builderDynamicArea_platform_v2.innerHTML = `
      <label class="platform-label-v2">
        Options (one per line)
      </label>

      <textarea
        class="platform-textarea-v2"
        id="builderOptions_platform_v2"
      ></textarea>

      <label class="platform-label-v2">
        Correct Option
      </label>

      <input
        class="platform-input-v2"
        id="builderCorrectOption_platform_v2"
      />
    `;
  }

  builderType_platform_v2.addEventListener(
    'change',
    renderDynamicFields_platform_v2
  );

  renderDynamicFields_platform_v2();

  builderCard_platform_v2
    .querySelector('#saveQuestionButton_platform_v2')
    .addEventListener('click', () => {
      const builderTypeValue_platform_v2 = builderType_platform_v2.value;

      callbacks_platform_v2.onSaveQuestion({
        language: builderCard_platform_v2.querySelector(
          '#builderLanguage_platform_v2'
        ).value,

        type: builderTypeValue_platform_v2,

        difficulty: builderCard_platform_v2.querySelector(
          '#builderDifficulty_platform_v2'
        ).value,

        prompt: builderCard_platform_v2.querySelector(
          '#builderPrompt_platform_v2'
        ).value,

        acceptedAnswers:
          builderTypeValue_platform_v2 === 'written'
            ? builderCard_platform_v2.querySelector(
                '#builderWrittenAnswers_platform_v2'
              ).value
            : '',

        options:
          builderTypeValue_platform_v2 === 'multiple_choice'
            ? builderCard_platform_v2.querySelector(
                '#builderOptions_platform_v2'
              ).value
            : '',

        correctOption:
          builderTypeValue_platform_v2 === 'multiple_choice'
            ? builderCard_platform_v2.querySelector(
                '#builderCorrectOption_platform_v2'
              ).value
            : ''
      });
    });

  builderCard_platform_v2
    .querySelector('#builderHomeButton_platform_v2')
    .addEventListener('click', () => {
      callbacks_platform_v2.onGoHome();
    });

  main_platform_v2.appendChild(builderCard_platform_v2);
  shell_platform_v2.appendChild(main_platform_v2);
  rootElement_platform_v2.appendChild(shell_platform_v2);
}