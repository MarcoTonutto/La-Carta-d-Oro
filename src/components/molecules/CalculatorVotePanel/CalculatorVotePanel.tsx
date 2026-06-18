import styled from 'styled-components';
import { Card, Heading, Text } from '../../atoms';
import { ScoreInputRow } from '../ScoreInputRow';
import type { CardVote, EnsembleVote, JudgeVotes } from '../../../types/scoring';

export interface CalculatorVotePanelProps {
  curatorName: string;
  judgeLabel: string;
  vote: JudgeVotes;
  phase1Title: string;
  phase2Title: string;
  ensembleLabel: string;
  cardLabel: string;
  cardParameterLabels: Record<keyof CardVote, string>;
  ensembleParameterLabels: Record<keyof EnsembleVote, string>;
  onCardVoteChange: (
    cardIndex: number,
    field: keyof CardVote,
    value: number,
  ) => void;
  onEnsembleVoteChange: (field: keyof EnsembleVote, value: number) => void;
}

const Panel = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ContextBanner = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.rgba.gold08};
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0 ${({ theme }) => theme.radii.sm} ${({ theme }) => theme.radii.sm} 0;
`;

const ContextName = styled.strong`
  color: ${({ theme }) => theme.colors.gold};
`;

const CARD_FIELDS = ['art', 'text', 'singleOriginality'] as const;
const ENSEMBLE_FIELDS = [
  'visualCoherence',
  'thematicCoherence',
  'ensembleOriginality',
] as const;

export function CalculatorVotePanel({
  curatorName,
  judgeLabel,
  vote,
  phase1Title,
  phase2Title,
  ensembleLabel,
  cardLabel,
  cardParameterLabels,
  ensembleParameterLabels,
  onCardVoteChange,
  onEnsembleVoteChange,
}: CalculatorVotePanelProps) {
  return (
    <Panel padding="lg">
      <ContextBanner>
        <Text variant="small">
          {judgeLabel} → <ContextName>{curatorName}</ContextName>
        </Text>
      </ContextBanner>

      <Heading level={4}>{phase1Title}</Heading>
      {vote.cards.map((card, cardIndex) => (
        <ScoreInputRow
          key={cardIndex}
          label={`${cardLabel} ${cardIndex + 1}`}
          fields={CARD_FIELDS.map((field) => ({
            key: field,
            label: cardParameterLabels[field],
            value: card[field],
            onChange: (v) => onCardVoteChange(cardIndex, field, v),
          }))}
        />
      ))}

      <Heading level={4}>{phase2Title}</Heading>
      <ScoreInputRow
        label={ensembleLabel}
        fields={ENSEMBLE_FIELDS.map((field) => ({
          key: field,
          label: ensembleParameterLabels[field],
          value: vote.ensemble[field],
          onChange: (v) => onEnsembleVoteChange(field, v),
        }))}
      />
    </Panel>
  );
}
