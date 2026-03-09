export function shuffleArrayWithClone_platform_v2(inputArray_platform_v2) {
  const clonedArray_platform_v2 = [...inputArray_platform_v2];

  for (let i = clonedArray_platform_v2.length - 1; i > 0; i--) {
    const randomIndex_platform_v2 = Math.floor(Math.random() * (i + 1));
    [clonedArray_platform_v2[i], clonedArray_platform_v2[randomIndex_platform_v2]] = [
      clonedArray_platform_v2[randomIndex_platform_v2],
      clonedArray_platform_v2[i]
    ];
  }

  return clonedArray_platform_v2;
}

export function normalizeTextAnswer_platform_v2(rawValue_platform_v2) {
  return String(rawValue_platform_v2)
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

export function createUniqueIdentifier_platform_v2() {
  return `question-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}