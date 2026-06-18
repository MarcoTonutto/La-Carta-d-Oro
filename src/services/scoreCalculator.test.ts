import { describe, it, expect } from 'vitest';
import {
  calculateCardScore,
  calculateEnsembleScore,
  calculateGameResult,
  determineWinner,
  createEmptyJudgeVotes,
  createEmptyPlayer,
  MAX_CARD_SCORE,
  MAX_ENSEMBLE_SCORE,
  MAX_FINAL_SCORE,
} from './scoreCalculator';

describe('scoreCalculator', () => {
  it('calculates max card score when all judges give 10 on all criteria', () => {
    const judgeCount = 3;
    const votes = Array.from({ length: judgeCount }, () => ({
      cards: Array.from({ length: 5 }, () => ({
        art: 10,
        text: 10,
        singleOriginality: 10,
      })),
      ensemble: {
        visualCoherence: 0,
        thematicCoherence: 0,
        ensembleOriginality: 0,
      },
    }));

    expect(calculateCardScore(votes, judgeCount)).toBeCloseTo(MAX_CARD_SCORE);
  });

  it('calculates max ensemble score when all judges give 10', () => {
    const judgeCount = 2;
    const votes = Array.from({ length: judgeCount }, () => ({
      cards: Array.from({ length: 5 }, () => ({
        art: 0,
        text: 0,
        singleOriginality: 0,
      })),
      ensemble: {
        visualCoherence: 10,
        thematicCoherence: 10,
        ensembleOriginality: 10,
      },
    }));

    expect(calculateEnsembleScore(votes, judgeCount)).toBeCloseTo(MAX_ENSEMBLE_SCORE);
  });

  it('calculates final score as sum of card and ensemble averages', () => {
    const player = createEmptyPlayer('Alice', 2);

    player.votes[0].cards[0] = { art: 10, text: 10, singleOriginality: 10 };
    player.votes[0].cards[1] = { art: 10, text: 10, singleOriginality: 10 };
    player.votes[0].cards[2] = { art: 10, text: 10, singleOriginality: 10 };
    player.votes[0].cards[3] = { art: 10, text: 10, singleOriginality: 10 };
    player.votes[0].cards[4] = { art: 10, text: 10, singleOriginality: 10 };
    player.votes[0].ensemble = {
      visualCoherence: 10,
      thematicCoherence: 10,
      ensembleOriginality: 10,
    };

    const result = calculateGameResult([player], 2);
    expect(result.winner.finalScore).toBeGreaterThan(0);
    expect(result.winner.finalScore).toBeLessThanOrEqual(MAX_FINAL_SCORE);
  });

  it('resolves tie with ensemble originality', () => {
    const players = [
      {
        name: 'Alice',
        averageCardScore: 25,
        averageEnsembleScore: 25,
        finalScore: 50,
        averageEnsembleOriginality: 7,
      },
      {
        name: 'Bob',
        averageCardScore: 25,
        averageEnsembleScore: 25,
        finalScore: 50,
        averageEnsembleOriginality: 9,
      },
    ];

    const { winner, isTieBreakApplied } = determineWinner(players);
    expect(winner.name).toBe('Bob');
    expect(isTieBreakApplied).toBe(true);
  });

  it('returns zero scores for empty votes', () => {
    const votes = [createEmptyJudgeVotes()];
    expect(calculateCardScore(votes, 1)).toBe(0);
    expect(calculateEnsembleScore(votes, 1)).toBe(0);
  });
});
