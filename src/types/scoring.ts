export const CARD_PARAMETERS = ['art', 'text', 'singleOriginality'] as const;
export const ENSEMBLE_PARAMETERS = [
  'visualCoherence',
  'thematicCoherence',
  'ensembleOriginality',
] as const;

export type CardParameter = (typeof CARD_PARAMETERS)[number];
export type EnsembleParameter = (typeof ENSEMBLE_PARAMETERS)[number];

export interface CardVote {
  art: number;
  text: number;
  singleOriginality: number;
}

export interface EnsembleVote {
  visualCoherence: number;
  thematicCoherence: number;
  ensembleOriginality: number;
}

export interface JudgeVotes {
  cards: CardVote[];
  ensemble: EnsembleVote;
}

export interface PlayerInput {
  name: string;
  votes: JudgeVotes[];
}

export interface PlayerResult {
  name: string;
  averageCardScore: number;
  averageEnsembleScore: number;
  finalScore: number;
  averageEnsembleOriginality: number;
}

export interface GameResult {
  players: PlayerResult[];
  winner: PlayerResult;
  isTieBreakApplied: boolean;
}
