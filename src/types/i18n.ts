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
    judgesLabel: string;
  };
  calculator: {
    pageTitle: string;
    pageLead: string;
    configTitle: string;
    playerCountLabel: string;
    judgesHint: string;
    designerNameLabel: string;
    phase1Title: string;
    phase2Title: string;
    ensembleLabel: string;
    standingsTitle: string;
    tieBreakNotice: string;
    votingTitle: string;
    selectDesignerLabel: string;
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
    phase1Subtitle: string;
    designerLabel: string;
    cardColumn: string;
    judgeColumn: string;
    totalColumn: string;
    cardLabel: string;
    judgeLabel: string;
    phase2Title: string;
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
  };
}

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}
