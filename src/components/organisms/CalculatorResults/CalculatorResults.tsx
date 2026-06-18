import styled from 'styled-components';
import { Heading, Text, Button } from '../../atoms';
import { PlayerScoreCard } from '../../molecules';
import type { GameResult } from '../../../types/scoring';

export interface CalculatorResultsProps {
  result: GameResult;
  standingsTitle: string;
  tieBreakNotice: string;
  revealButtonLabel: string;
  hideButtonLabel: string;
  isVisible: boolean;
  onToggle: () => void;
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;
  width: 100%;

  button {
    width: 100%;
    min-height: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: auto;
    }
  }
`;

const Results = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export function CalculatorResults({
  result,
  standingsTitle,
  tieBreakNotice,
  revealButtonLabel,
  hideButtonLabel,
  isVisible,
  onToggle,
}: CalculatorResultsProps) {
  return (
    <Section>
      <Button type="button" variant="secondary" onClick={onToggle}>
        {isVisible ? hideButtonLabel : revealButtonLabel}
      </Button>

      {isVisible && (
        <Results>
          <Heading level={3} variant="gold">
            {standingsTitle}
          </Heading>
          {result.isTieBreakApplied && (
            <Text variant="muted">{tieBreakNotice}</Text>
          )}
          {result.players.map((player, index) => (
            <PlayerScoreCard
              key={player.name}
              player={player}
              rank={index + 1}
              isWinner={player.name === result.winner.name}
            />
          ))}
        </Results>
      )}
    </Section>
  );
}
