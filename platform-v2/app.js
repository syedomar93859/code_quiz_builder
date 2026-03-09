import { questionRepositorySingleton_platform_v2 } from './core/question-bank.js';
import { QuizEngineCoordinator_platform_v2 } from './core/quiz-engine.js';
import { createInitialApplicationState_platform_v2 } from './features/quiz/quiz-state.js';
import { renderHomeScreen_platform_v2 } from './ui/render-home.js';
import { renderQuizScreen_platform_v2 } from './ui/render-quiz.js';
import { renderResultsScreen_platform_v2 } from './ui/render-results.js';
import { renderBuilderScreen_platform_v2 } from './ui/render-builder.js';
import { buildQuestionRecordFromForm_platform_v2 } from './features/builder/builder-controller.js';

const applicationRoot_platform_v2 = document.getElementById(
  'appRoot_platform_v2'
);

const applicationState_platform_v2 =
  createInitialApplicationState_platform_v2();

const quizEngine_platform_v2 = new QuizEngineCoordinator_platform_v2(
  questionRepositorySingleton_platform_v2
);

function rerenderApplication_platform_v2() {
  if (applicationState_platform_v2.currentView === 'home') {
    renderHomeScreen_platform_v2(
      applicationRoot_platform_v2,
      applicationState_platform_v2,
      {
        onToggleLanguage: toggleLanguageSelection_platform_v2,
        onStartQuiz: startQuizFlow_platform_v2,
        onOpenBuilder: openBuilderView_platform_v2
      }
    );
    return;
  }

  if (applicationState_platform_v2.currentView === 'quiz') {
    renderQuizScreen_platform_v2(
      applicationRoot_platform_v2,
      applicationState_platform_v2.activeQuizSession,
      {
        onSubmitAnswer: submitActiveQuestionAnswer_platform_v2,
        onNextQuestion: advanceToNextQuestion_platform_v2,
        onShowResults: showResultsView_platform_v2,
        onGoHome: returnHomeView_platform_v2
      }
    );
    return;
  }

  if (applicationState_platform_v2.currentView === 'results') {
    renderResultsScreen_platform_v2(
      applicationRoot_platform_v2,
      applicationState_platform_v2.activeQuizSession,
      {
        onGoHome: returnHomeView_platform_v2
      }
    );
    return;
  }

  if (applicationState_platform_v2.currentView === 'builder') {
    renderBuilderScreen_platform_v2(applicationRoot_platform_v2, {
      onSaveQuestion: saveNewQuestionFromBuilder_platform_v2,
      onGoHome: returnHomeView_platform_v2
    });
  }
}

function toggleLanguageSelection_platform_v2(language_platform_v2) {
  if (applicationState_platform_v2.selectedLanguages.has(language_platform_v2)) {
    applicationState_platform_v2.selectedLanguages.delete(language_platform_v2);
  } else {
    applicationState_platform_v2.selectedLanguages.add(language_platform_v2);
  }

  rerenderApplication_platform_v2();
}

function startQuizFlow_platform_v2(settingsPayload_platform_v2) {
  const selectedLanguagesArray_platform_v2 = [
    ...applicationState_platform_v2.selectedLanguages
  ];

  if (selectedLanguagesArray_platform_v2.length === 0) {
    alert('Select at least one language before starting the quiz.');
    return;
  }

  const newQuizSession_platform_v2 =
    quizEngine_platform_v2.createQuizSession_platform_v2({
      languages: selectedLanguagesArray_platform_v2,
      numberOfQuestions: settingsPayload_platform_v2.numberOfQuestions,
      triesPerQuestion: settingsPayload_platform_v2.triesPerQuestion,
      difficulty: settingsPayload_platform_v2.difficulty,
      type: settingsPayload_platform_v2.type
    });

  if (newQuizSession_platform_v2.questions.length === 0) {
    alert('No questions matched your filters.');
    return;
  }

  applicationState_platform_v2.activeQuizSession = newQuizSession_platform_v2;
  applicationState_platform_v2.currentView = 'quiz';
  rerenderApplication_platform_v2();
}

function submitActiveQuestionAnswer_platform_v2(userSubmission_platform_v2) {
  if (!userSubmission_platform_v2 || !String(userSubmission_platform_v2).trim()) {
    alert('Enter or select an answer first.');
    return;
  }

  quizEngine_platform_v2.submitAnswer_platform_v2(
    applicationState_platform_v2.activeQuizSession,
    userSubmission_platform_v2
  );

  rerenderApplication_platform_v2();
}

function advanceToNextQuestion_platform_v2() {
  quizEngine_platform_v2.moveToNextQuestion_platform_v2(
    applicationState_platform_v2.activeQuizSession
  );

  if (applicationState_platform_v2.activeQuizSession.completed) {
    applicationState_platform_v2.currentView = 'results';
  }

  rerenderApplication_platform_v2();
}

function showResultsView_platform_v2() {
  applicationState_platform_v2.currentView = 'results';
  rerenderApplication_platform_v2();
}

function openBuilderView_platform_v2() {
  applicationState_platform_v2.currentView = 'builder';
  rerenderApplication_platform_v2();
}

function saveNewQuestionFromBuilder_platform_v2(formPayload_platform_v2) {
  const buildResult_platform_v2 =
    buildQuestionRecordFromForm_platform_v2(formPayload_platform_v2);

  if (buildResult_platform_v2.error) {
    alert(buildResult_platform_v2.error);
    return;
  }

  questionRepositorySingleton_platform_v2.addQuestion_platform_v2(
    buildResult_platform_v2.question
  );

  alert(
    'Question saved successfully. It is now part of the quiz bank for this session.'
  );

  applicationState_platform_v2.currentView = 'home';
  rerenderApplication_platform_v2();
}

function returnHomeView_platform_v2() {
  applicationState_platform_v2.currentView = 'home';
  rerenderApplication_platform_v2();
}

rerenderApplication_platform_v2();