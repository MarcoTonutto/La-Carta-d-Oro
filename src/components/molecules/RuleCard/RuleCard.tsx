import styled from 'styled-components';
import { Card, Heading, Text, Badge } from '../../atoms';

export interface RuleCardProps {
  title: string;
  content: string;
  badge?: string;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export function RuleCard({ title, content, badge }: RuleCardProps) {
  return (
    <StyledCard padding="lg">
      <Header>
        <Heading level={3}>{title}</Heading>
        {badge && <Badge variant="gold">{badge}</Badge>}
      </Header>
      <Text variant="muted">{content}</Text>
    </StyledCard>
  );
}
