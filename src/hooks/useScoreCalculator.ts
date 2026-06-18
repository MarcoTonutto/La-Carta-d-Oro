import { useMemo, useState, useCallback, useEffect } from 'react';
import type { CardVote, EnsembleVote, GameResult, PlayerInput } from '../types/scoring';
import {
  calculateGameResult,
  createEmptyPlayer,
  CARDS_PER_SET,
} from '../services/scoreCalculator';

interface UseScoreCalculatorOptions {
  initialPlayerCount?: number;
  playerPrefix?: string;
}

const DEFAULT_NAME_PATTERN = /^(Giocatore|Player)\s+\d+$/;

export function useScoreCalculator({
  initialPlayerCount = 3,
  playerPrefix = 'Giocatore',
}: UseScoreCalculatorOptions = {}) {
  const [playerCount, setPlayerCount] = useState(initialPlayerCount);
  const judgeCount = Math.max(playerCount - 1, 1);

  const [players, setPlayers] = useState<PlayerInput[]>(() =>
    Array.from({ length: initialPlayerCount }, (_, i) =>
      createEmptyPlayer(
        `${playerPrefix} ${i + 1}`,
        Math.max(initialPlayerCount - 1, 1),
      ),
    ),
  );

  useEffect(() => {
    setPlayers((prev) =>
      prev.map((player, i) =>
        DEFAULT_NAME_PATTERN.test(player.name)
          ? { ...player, name: `${playerPrefix} ${i + 1}` }
          : player,
      ),
    );
  }, [playerPrefix]);

  const updatePlayerCount = useCallback(
    (count: number) => {
      const safeCount = Math.max(2, Math.min(8, count));
      const newJudgeCount = Math.max(safeCount - 1, 1);
      setPlayerCount(safeCount);
      setPlayers((prev) =>
        Array.from({ length: safeCount }, (_, i) => {
          const existing = prev[i];
          if (existing) {
            return {
              ...existing,
              votes: Array.from({ length: newJudgeCount }, (_, j) =>
                existing.votes[j] ?? createEmptyPlayer('', newJudgeCount).votes[0],
              ),
            };
          }
          return createEmptyPlayer(`${playerPrefix} ${i + 1}`, newJudgeCount);
        }),
      );
    },
    [playerPrefix],
  );

  const updatePlayerName = useCallback((playerIndex: number, name: string) => {
    setPlayers((prev) =>
      prev.map((player, i) => (i === playerIndex ? { ...player, name } : player)),
    );
  }, []);

  const updateCardVote = useCallback(
    (
      playerIndex: number,
      judgeIndex: number,
      cardIndex: number,
      field: keyof CardVote,
      value: number,
    ) => {
      setPlayers((prev) =>
        prev.map((player, pi) => {
          if (pi !== playerIndex) return player;
          return {
            ...player,
            votes: player.votes.map((vote, ji) => {
              if (ji !== judgeIndex) return vote;
              return {
                ...vote,
                cards: vote.cards.map((card, ci) =>
                  ci === cardIndex ? { ...card, [field]: value } : card,
                ),
              };
            }),
          };
        }),
      );
    },
    [],
  );

  const updateEnsembleVote = useCallback(
    (
      playerIndex: number,
      judgeIndex: number,
      field: keyof EnsembleVote,
      value: number,
    ) => {
      setPlayers((prev) =>
        prev.map((player, pi) => {
          if (pi !== playerIndex) return player;
          return {
            ...player,
            votes: player.votes.map((vote, ji) => {
              if (ji !== judgeIndex) return vote;
              return {
                ...vote,
                ensemble: { ...vote.ensemble, [field]: value },
              };
            }),
          };
        }),
      );
    },
    [],
  );

  const result: GameResult | null = useMemo(() => {
    try {
      return calculateGameResult(players, judgeCount);
    } catch {
      return null;
    }
  }, [players, judgeCount]);

  return {
    playerCount,
    judgeCount,
    players,
    cardsPerSet: CARDS_PER_SET,
    result,
    updatePlayerCount,
    updatePlayerName,
    updateCardVote,
    updateEnsembleVote,
  };
}
