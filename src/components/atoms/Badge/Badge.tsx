import styled, { css } from 'styled-components';
import type { BaseComponentProps } from '../../../types/base';

type BadgeVariant = 'gold' | 'burgundy' | 'neutral';

export interface BadgeProps extends BaseComponentProps {
  variant?: BadgeVariant;
}

const variantStyles = {
  gold: css`
    background: ${({ theme }) => theme.rgba.gold15};
    color: ${({ theme }) => theme.colors.gold};
    border: 1px solid ${({ theme }) => theme.rgba.gold40};
  `,
  burgundy: css`
    background: ${({ theme }) => theme.rgba.burgundy35};
    color: ${({ theme }) => theme.colors.ivory};
    border: 1px solid ${({ theme }) => theme.colors.burgundy};
  `,
  neutral: css`
    background: ${({ theme }) => theme.colors.surfaceLight};
    color: ${({ theme }) => theme.colors.textMuted};
    border: 1px solid ${({ theme }) => theme.rgba.silver15};
  `,
};

const StyledBadge = styled.span<{ $variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radii.full};
  ${({ $variant }) => variantStyles[$variant]}
`;

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <StyledBadge $variant={variant} className={className}>
      {children}
    </StyledBadge>
  );
}
