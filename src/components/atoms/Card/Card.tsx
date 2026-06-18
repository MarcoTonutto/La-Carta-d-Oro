import styled from 'styled-components';
import { glassCard } from '../../../styles/mixins';
import type { BaseComponentProps } from '../../../types/base';

export interface CardProps extends BaseComponentProps {
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

const paddingMap = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
};

const StyledCard = styled.div<{ $padding: string; $hoverable: boolean }>`
  ${glassCard}
  padding: ${({ $padding }) => $padding};
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ $hoverable, theme }) =>
    $hoverable &&
    `
    cursor: pointer;
    &:hover {
      border-color: ${theme.rgba.gold50};
      box-shadow: ${theme.shadows.glow};
      transform: translateY(-2px);
    }
  `}
`;

export function Card({
  children,
  padding = 'md',
  hoverable = false,
  className,
}: CardProps) {
  return (
    <StyledCard
      $padding={paddingMap[padding]}
      $hoverable={hoverable}
      className={className}
    >
      {children}
    </StyledCard>
  );
}
