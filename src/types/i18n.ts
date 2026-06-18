import type { GamePhase, RuleSection } from '../types/game';
import type { CardVote, EnsembleVote } from '../types/scoring';

export type Language = 'it' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    play: string;
    calculator: string;
    menuOpen: string;
    menuClose: string;
  };
  footer: {
    tagline: string;
    disclaimer: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    formatTitle: string;
    formatLead: string;
    exploreTitle: string;
    ctaPlayTitle: string;
    ctaPlayDescription: string;
    ctaCalculatorTitle: string;
    ctaCalculatorDescription: string;
    pitchPoints: { title: string; description: string }[];
  };
  play: {
    pageTitle: string;
    pageLead: string;
    setupTitle: string;
    setup: RuleSection;
    phasesTitle: string;
    phases: GamePhase[];
    scoringTitle: string;
    scoring: RuleSection;
    calculatorCta: string;
    sheetTitle: string;
    sheetDescription: string;
    playersLabel: string;
    playersCountHint: string;
    editPlayerNames: string;
    hidePlayerNames: string;
    judgesLabel: string;
  };
  calculator: {
    pageTitle: string;
    pageLead: string;
    configTitle: string;
    playerCountLabel: string;
    playerCountHint: string;
    judgesHint: string;
    curatorNameLabel: string;
    phase1Title: string;
    phase2Title: string;
    ensembleLabel: string;
    standingsTitle: string;
    tieBreakNotice: string;
    votingTitle: string;
    selectCuratorLabel: string;
    selectJudgeLabel: string;
    previousPair: string;
    nextPair: string;
    editPlayerNames: string;
    hidePlayerNames: string;
    revealResults: string;
    hideResults: string;
    legendTitle: string;
    legendIntro: string;
    cardParameterLabels: Record<keyof CardVote, string>;
    ensembleParameterLabels: Record<keyof EnsembleVote, string>;
  };
  scoreSheet: {
    printButton: string;
    title: string;
    judgeSheetTitle: string;
    phase1Subtitle: string;
    curatorLabel: string;
    cardColumn: string;
    judgeColumn: string;
    totalColumn: string;
    cardLabel: string;
    judgeLabel: string;
    phase2Title: string;
    recapTitle: string;
    recapSubtitle: string;
    playerColumn: string;
    phase1SumColumn: string;
    phase2SumColumn: string;
    cardScoreColumn: string;
    ensembleScoreColumn: string;
    finalScoreColumn: string;
    tieBreakNote: string;
  };
  playerScore: {
    champion: string;
    avgCards: string;
    avgEnsemble: string;
    finalScore: string;
    ensembleOriginality: string;
  };
  common: {
    player: string;
    judge: string;
    appName: string;
    loading: string;
  };
}

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}
