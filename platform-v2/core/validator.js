import { normalizeTextAnswer_platform_v2 } from './utils.js';

export function evaluateUserAnswer_platform_v2(
  questionRecord_platform_v2,
  submittedAnswer_platform_v2
) {
  if (!questionRecord_platform_v2 || !questionRecord_platform_v2.answerConfig) {
    return false;
  }

  const { mode } = questionRecord_platform_v2.answerConfig;

  if (mode === 'text') {
    const normalizedSubmission_platform_v2 =
      normalizeTextAnswer_platform_v2(submittedAnswer_platform_v2);

    return questionRecord_platform_v2.answerConfig.acceptedAnswers.some(
      (acceptedAnswer_platform_v2) =>
        normalizeTextAnswer_platform_v2(acceptedAnswer_platform_v2) ===
        normalizedSubmission_platform_v2
    );
  }

  if (mode === 'single_option') {
    return (
      submittedAnswer_platform_v2 ===
      questionRecord_platform_v2.answerConfig.correctOption
    );
  }

  return false;
}

export function revealCorrectAnswer_platform_v2(questionRecord_platform_v2) {
  if (questionRecord_platform_v2.answerConfig.mode === 'text') {
    return questionRecord_platform_v2.answerConfig.acceptedAnswers[0];
  }

  if (questionRecord_platform_v2.answerConfig.mode === 'single_option') {
    return questionRecord_platform_v2.answerConfig.correctOption;
  }

  return 'No answer available';
}