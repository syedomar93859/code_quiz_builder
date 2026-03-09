export function calculateRemainingTries_platform_v2(
  maximumTries_platform_v2,
  usedAttempts_platform_v2
) {
  return Math.max(0, maximumTries_platform_v2 - usedAttempts_platform_v2);
}

export function calculateQuestionPoints_platform_v2(
  maximumTries_platform_v2,
  incorrectAttempts_platform_v2,
  solved_platform_v2
) {
  if (!solved_platform_v2) {
    return 0;
  }

  const penaltyPerWrongAttempt_platform_v2 =
    1 / maximumTries_platform_v2;
  const rawPoints_platform_v2 =
    1 - incorrectAttempts_platform_v2 * penaltyPerWrongAttempt_platform_v2;

  return Math.max(0, Number(rawPoints_platform_v2.toFixed(2)));
}

export function calculateTotalScore_platform_v2(
  questionProgressMap_platform_v2
) {
  return Object.values(questionProgressMap_platform_v2).reduce(
    (runningTotal_platform_v2, answerState_platform_v2) => {
      return runningTotal_platform_v2 + (answerState_platform_v2.pointsEarned || 0);
    },
    0
  );
}