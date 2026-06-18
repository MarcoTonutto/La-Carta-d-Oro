import styled from 'styled-components';
import { Card, Heading, Text } from '../../atoms';
import { ScoringParameter } from '../../molecules/ScoringParameter';
import { useTranslation } from '../../../hooks/useTranslation';

const Legend = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Intro = styled(Text)`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.rgba.gold05};
  border-radius: ${({ theme }) => theme.radii.md};
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
`;

const PhaseBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CriteriaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export function VotingLegend() {
  const { t } = useTranslation();

  return (
    <Legend padding="lg">
      <Heading level={3} variant="gold">
        {t.calculator.legendTitle}
      </Heading>
      <Intro variant="muted">{t.calculator.legendIntro}</Intro>

      {t.play.phases.map((phase) => (
        <PhaseBlock key={phase.id}>
          <Heading level={4}>{phase.title}</Heading>
          <Text variant="small">{phase.description}</Text>
          <CriteriaGrid>
            {phase.criteria.map((criterion) => (
              <ScoringParameter
                key={criterion.id}
                name={criterion.name}
                description={criterion.description}
              />
            ))}
          </CriteriaGrid>
        </PhaseBlock>
      ))}
    </Legend>
  );
}
