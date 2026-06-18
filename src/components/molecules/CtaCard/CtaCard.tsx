import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Heading, Text } from '../../atoms';

export interface CtaCardProps {
  to: string;
  title: string;
  description: string;
  icon?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  height: 100%;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
`;

const Icon = styled.span`
  font-size: 2rem;
`;

export function CtaCard({ to, title, description, icon }: CtaCardProps) {
  return (
    <StyledLink to={to}>
      <StyledCard padding="lg" hoverable>
        {icon && <Icon>{icon}</Icon>}
        <Heading level={3} variant="gold">
          {title}
        </Heading>
        <Text variant="muted">{description}</Text>
      </StyledCard>
    </StyledLink>
  );
}
