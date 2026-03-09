import { createUniqueIdentifier_platform_v2 } from '../../core/utils.js';

export function buildQuestionRecordFromForm_platform_v2(
  formPayload_platform_v2
) {
  const trimmedPrompt_platform_v2 = formPayload_platform_v2.prompt.trim();

  if (!trimmedPrompt_platform_v2) {
    return { error: 'Prompt is required.' };
  }

  if (formPayload_platform_v2.type === 'written') {
    const acceptedAnswers_platform_v2 = formPayload_platform_v2.acceptedAnswers
      .split('\n')
      .map((answer_platform_v2) => answer_platform_v2.trim())
      .filter(Boolean);

    if (acceptedAnswers_platform_v2.length === 0) {
      return { error: 'At least one accepted answer is required.' };
    }

    return {
      question: {
        id: createUniqueIdentifier_platform_v2(),
        language: formPayload_platform_v2.language,
        type: 'written',
        difficulty: formPayload_platform_v2.difficulty,
        prompt: trimmedPrompt_platform_v2,
        answerConfig: {
          mode: 'text',
          acceptedAnswers: acceptedAnswers_platform_v2
        },
        tags: []
      }
    };
  }

  const parsedOptions_platform_v2 = formPayload_platform_v2.options
    .split('\n')
    .map((option_platform_v2) => option_platform_v2.trim())
    .filter(Boolean);

  if (parsedOptions_platform_v2.length < 2) {
    return {
      error: 'Multiple choice questions need at least two options.'
    };
  }

  const trimmedCorrectOption_platform_v2 =
    formPayload_platform_v2.correctOption.trim();

  if (!parsedOptions_platform_v2.includes(trimmedCorrectOption_platform_v2)) {
    return {
      error: 'Correct option must exactly match one of the provided options.'
    };
  }

  return {
    question: {
      id: createUniqueIdentifier_platform_v2(),
      language: formPayload_platform_v2.language,
      type: 'multiple_choice',
      difficulty: formPayload_platform_v2.difficulty,
      prompt: trimmedPrompt_platform_v2,
      options: parsedOptions_platform_v2,
      answerConfig: {
        mode: 'single_option',
        correctOption: trimmedCorrectOption_platform_v2
      },
      tags: []
    }
  };
}