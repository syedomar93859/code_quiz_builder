import { questionBankData_platform_v2 } from '../data/questions.js';

export class ScalableQuestionRepository_platform_v2 {
  constructor(initialQuestions_platform_v2 = []) {
    this.questionCollection_platform_v2 = [...initialQuestions_platform_v2];
  }

  getAllQuestions_platform_v2() {
    return [...this.questionCollection_platform_v2];
  }

  addQuestion_platform_v2(questionRecord_platform_v2) {
    this.questionCollection_platform_v2.push(questionRecord_platform_v2);
  }

  filterQuestions_platform_v2(filterConfig_platform_v2 = {}) {
    const {
      languages = [],
      difficulty = 'all',
      type = 'all'
    } = filterConfig_platform_v2;

    return this.questionCollection_platform_v2.filter(
      (questionRecord_platform_v2) => {
        const languageMatch_platform_v2 =
          languages.length === 0 ||
          languages.includes(questionRecord_platform_v2.language);

        const difficultyMatch_platform_v2 =
          difficulty === 'all' ||
          questionRecord_platform_v2.difficulty === difficulty;

        const typeMatch_platform_v2 =
          type === 'all' || questionRecord_platform_v2.type === type;

        return (
          languageMatch_platform_v2 &&
          difficultyMatch_platform_v2 &&
          typeMatch_platform_v2
        );
      }
    );
  }
}

export const questionRepositorySingleton_platform_v2 =
  new ScalableQuestionRepository_platform_v2(questionBankData_platform_v2);