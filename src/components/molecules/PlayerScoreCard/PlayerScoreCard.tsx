import styled from 'styled-components';
import { Card, Heading, Text, Badge } from '../../atoms';
import { useTranslation } from '../../../hooks/useTranslation';
import type { PlayerResult } from '../../../types/scoring';

export interface PlayerScoreCardProps {
  player: PlayerResult;
  rank: number;
  isWinner: boolean;
}

const StyledCard = styled(Card)<{ $isWinner: boolean }>`
  border-color: ${({ $isWinner, theme }) =>
    $isWinner ? theme.colors.gold : theme.rgba.gold25};
  box-shadow: ${({ $isWinner, theme }) => ($isWinner ? theme.shadows.glow : theme.shadows.card)};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Scores = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ScoreItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.rgba.gold05};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const ScoreValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
`;

const ScoreLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export function PlayerScoreCard({ player, rank, isWinner }: PlayerScoreCardProps) {
  const { t } = useTranslation();

  return (
    <StyledCard padding="lg" $isWinner={isWinner}>
      <Header>
        <Heading level={3}>
          #{rank} {player.name}
        </Heading>
        {isWinner && <Badge variant="gold">{t.playerScore.champion}</Badge>}
      </Header>
      <Scores>
        <ScoreItem>
          <ScoreValue>{player.averageCardScore.toFixed(2)}</ScoreValue>
          <ScoreLabel>{t.playerScore.avgCards}</ScoreLabel>
        </ScoreItem>
        <ScoreItem>
          <ScoreValue>{player.averageEnsembleScore.toFixed(2)}</ScoreValue>
          <ScoreLabel>{t.playerScore.avgEnsemble}</ScoreLabel>
        </ScoreItem>
        <ScoreItem>
          <ScoreValue>{player.finalScore.toFixed(2)}</ScoreValue>
          <ScoreLabel>{t.playerScore.finalScore}</ScoreLabel>
        </ScoreItem>
      </Scores>
      {isWinner && (
        <Text variant="small" align="center">
          {t.playerScore.ensembleOriginality}:{' '}
          {player.averageEnsembleOriginality.toFixed(2)}
        </Text>
      )}
    </StyledCard>
  );
}
