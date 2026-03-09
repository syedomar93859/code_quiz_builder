export function createInitialApplicationState_platform_v2() {
  return {
    selectedLanguages: new Set(),
    activeQuizSession: null,
    currentView: 'home'
  };
}