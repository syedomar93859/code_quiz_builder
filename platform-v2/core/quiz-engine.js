import { shuffleArrayWithClone_platform_v2 } from './utils.js';
import { evaluateUserAnswer_platform_v2 } from './validator.js';
import {
  calculateQuestionPoints_platform_v2,
  calculateTotalScore_platform_v2
} from './scorer.js';

export class QuizEngineCoordinator_platform_v2 {
  constructor(questionRepository_platform_v2) {
    this.questionRepository_platform_v2 = questionRepository_platform_v2;
  }

  createQuizSession_platform_v2(settings_platform_v2) {
    const filteredQuestions_platform_v2 =
      this.questionRepository_platform_v2.filterQuestions_platform_v2({
        languages: settings_platform_v2.languages,
        difficulty: settings_platform_v2.difficulty,
        type: settings_platform_v2.type
      });

    const shuffledQuestions_platform_v2 = shuffleArrayWithClone_platform_v2(
      filteredQuestions_platform_v2
    )
      .slice(0, settings_platform_v2.numberOfQuestions)
      .map((questionRecord_platform_v2) => {
        if (questionRecord_platform_v2.type === 'multiple_choice') {
          return {
            ...questionRecord_platform_v2,
            options: shuffleArrayWithClone_platform_v2(
              questionRecord_platform_v2.options
            )
          };
        }

        return { ...questionRecord_platform_v2 };
      });

    const perQuestionProgress_platform_v2 = {};

    shuffledQuestions_platform_v2.forEach((questionRecord_platform_v2) => {
      perQuestionProgress_platform_v2[questionRecord_platform_v2.id] = {
        attemptsUsed: 0,
        solved: false,
        finished: false,
        responses: [],
        pointsEarned: 0
      };
    });

    return {
      settings: { ...settings_platform_v2 },
      questions: shuffledQuestions_platform_v2,
      progress: perQuestionProgress_platform_v2,
      currentQuestionIndex: 0,
      completed: false,
      totalScore: 0
    };
  }

  submitAnswer_platform_v2(
    quizSession_platform_v2,
    submittedAnswer_platform_v2
  ) {
    if (quizSession_platform_v2.completed) {
      return { status: 'quiz_already_finished' };
    }

    const activeQuestion_platform_v2 =
      quizSession_platform_v2.questions[
        quizSession_platform_v2.currentQuestionIndex
      ];

    const activeProgress_platform_v2 =
      quizSession_platform_v2.progress[activeQuestion_platform_v2.id];

    if (activeProgress_platform_v2.finished) {
      return { status: 'question_already_finished' };
    }

    activeProgress_platform_v2.attemptsUsed += 1;
    activeProgress_platform_v2.responses.push(submittedAnswer_platform_v2);

    const answerIsCorrect_platform_v2 = evaluateUserAnswer_platform_v2(
      activeQuestion_platform_v2,
      submittedAnswer_platform_v2
    );

    if (answerIsCorrect_platform_v2) {
      activeProgress_platform_v2.solved = true;
      activeProgress_platform_v2.finished = true;
      activeProgress_platform_v2.pointsEarned =
        calculateQuestionPoints_platform_v2(
          quizSession_platform_v2.settings.triesPerQuestion,
          activeProgress_platform_v2.attemptsUsed - 1,
          true
        );
    } else if (
      activeProgress_platform_v2.attemptsUsed >=
      quizSession_platform_v2.settings.triesPerQuestion
    ) {
      activeProgress_platform_v2.finished = true;
      activeProgress_platform_v2.pointsEarned = 0;
    }

    quizSession_platform_v2.totalScore = calculateTotalScore_platform_v2(
      quizSession_platform_v2.progress
    );

    return {
      status: answerIsCorrect_platform_v2
        ? 'correct'
        : activeProgress_platform_v2.finished
        ? 'locked'
        : 'incorrect',
      question: activeQuestion_platform_v2,
      progress: activeProgress_platform_v2
    };
  }

  moveToNextQuestion_platform_v2(quizSession_platform_v2) {
    const finalQuestionIndex_platform_v2 =
      quizSession_platform_v2.questions.length - 1;

    if (
      quizSession_platform_v2.currentQuestionIndex >=
      finalQuestionIndex_platform_v2
    ) {
      quizSession_platform_v2.completed = true;
      return;
    }

    quizSession_platform_v2.currentQuestionIndex += 1;
  }
}