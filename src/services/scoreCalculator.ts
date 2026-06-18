import type {
  CardVote,
  EnsembleVote,
  GameResult,
  JudgeVotes,
  PlayerInput,
  PlayerResult,
} from '../types/scoring';

export const CARDS_PER_SET = 5;
export const MAX_SCORE_PER_CRITERION = 10;
export const MAX_CARD_SCORE = 30;
export const MAX_ENSEMBLE_SCORE = 30;
export const MAX_FINAL_SCORE = 60;

function sumCardVote(card: CardVote): number {
  return card.art + card.text + card.singleOriginality;
}

function sumEnsembleVote(ensemble: EnsembleVote): number {
  return (
    ensemble.visualCoherence +
    ensemble.thematicCoherence +
    ensemble.ensembleOriginality
  );
}

export function calculateCardScore(votes: JudgeVotes[], judgeCount: number): number {
  if (judgeCount === 0) return 0;

  const totalCardVotes = votes.reduce((total, judgeVote) => {
    const judgeCardTotal = judgeVote.cards.reduce(
      (sum, card) => sum + sumCardVote(card),
      0,
    );
    return total + judgeCardTotal;
  }, 0);

  return totalCardVotes / CARDS_PER_SET / judgeCount;
}

export function calculateEnsembleScore(
  votes: JudgeVotes[],
  judgeCount: number,
): number {
  if (judgeCount === 0) return 0;

  const totalEnsembleVotes = votes.reduce(
    (total, judgeVote) => total + sumEnsembleVote(judgeVote.ensemble),
    0,
  );

  return totalEnsembleVotes / judgeCount;
}

export function calculateEnsembleOriginalityAverage(
  votes: JudgeVotes[],
  judgeCount: number,
): number {
  if (judgeCount === 0) return 0;

  const total = votes.reduce(
    (sum, judgeVote) => sum + judgeVote.ensemble.ensembleOriginality,
    0,
  );

  return total / judgeCount;
}

export function calculatePlayerResult(
  player: PlayerInput,
  judgeCount: number,
): PlayerResult {
  const averageCardScore = calculateCardScore(player.votes, judgeCount);
  const averageEnsembleScore = calculateEnsembleScore(player.votes, judgeCount);
  const averageEnsembleOriginality = calculateEnsembleOriginalityAverage(
    player.votes,
    judgeCount,
  );

  return {
    name: player.name,
    averageCardScore,
    averageEnsembleScore,
    finalScore: averageCardScore + averageEnsembleScore,
    averageEnsembleOriginality,
  };
}

export function determineWinner(players: PlayerResult[]): {
  winner: PlayerResult;
  isTieBreakApplied: boolean;
} {
  if (players.length === 0) {
    throw new Error('At least one player is required');
  }

  const sorted = [...players].sort((a, b) => b.finalScore - a.finalScore);
  const topScore = sorted[0].finalScore;
  const tied = sorted.filter((p) => p.finalScore === topScore);

  if (tied.length === 1) {
    return { winner: tied[0], isTieBreakApplied: false };
  }

  const winner = tied.reduce((best, current) =>
    current.averageEnsembleOriginality > best.averageEnsembleOriginality
      ? current
      : best,
  );

  return { winner, isTieBreakApplied: true };
}

export function calculateGameResult(
  players: PlayerInput[],
  judgeCount: number,
): GameResult {
  const results = players.map((player) =>
    calculatePlayerResult(player, judgeCount),
  );

  const ranked = [...results].sort((a, b) => b.finalScore - a.finalScore);
  const { winner, isTieBreakApplied } = determineWinner(results);

  return {
    players: ranked,
    winner,
    isTieBreakApplied,
  };
}

export function createEmptyCardVote(): CardVote {
  return { art: 0, text: 0, singleOriginality: 0 };
}

export function createEmptyEnsembleVote(): EnsembleVote {
  return {
    visualCoherence: 0,
    thematicCoherence: 0,
    ensembleOriginality: 0,
  };
}

export function createEmptyJudgeVotes(): JudgeVotes {
  return {
    cards: Array.from({ length: CARDS_PER_SET }, createEmptyCardVote),
    ensemble: createEmptyEnsembleVote(),
  };
}

export function createEmptyPlayer(name: string, judgeCount: number): PlayerInput {
  return {
    name,
    votes: Array.from({ length: judgeCount }, createEmptyJudgeVotes),
  };
}
