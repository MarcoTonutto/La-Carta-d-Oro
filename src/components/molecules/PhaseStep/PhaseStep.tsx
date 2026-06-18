import styled from 'styled-components';
import { Heading, Text } from '../../atoms';
import type { ScoringCriterion } from '../../../types/game';

export interface PhaseStepProps {
  number: number;
  title: string;
  description: string;
  criteria?: ScoringCriterion[];
  isLast?: boolean;
}

const StepWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const StepNumber = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.goldDark},
    ${({ theme }) => theme.colors.gold}
  );
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  z-index: 1;
`;

const Connector = styled.div`
  flex: 1;
  width: 2px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.rgba.gold20}
  );
  min-height: 2rem;
`;

const Content = styled.div`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.xs};
`;

const CriteriaList = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CriterionItem = styled.li`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.rgba.gold05};
  border-left: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0 ${({ theme }) => theme.radii.sm} ${({ theme }) => theme.radii.sm} 0;
`;

const CriterionName = styled.strong`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
`;

export function PhaseStep({
  number,
  title,
  description,
  criteria,
  isLast = false,
}: PhaseStepProps) {
  return (
    <StepWrapper>
      <Timeline>
        <StepNumber>{number}</StepNumber>
        {!isLast && <Connector />}
      </Timeline>
      <Content>
        <Heading level={3}>{title}</Heading>
        <Text variant="muted">{description}</Text>
        {criteria && criteria.length > 0 && (
          <CriteriaList>
            {criteria.map((criterion) => (
              <CriterionItem key={criterion.id}>
                <CriterionName>{criterion.name}</CriterionName>
                {' — '}
                {criterion.description}
              </CriterionItem>
            ))}
          </CriteriaList>
        )}
      </Content>
    </StepWrapper>
  );
}
