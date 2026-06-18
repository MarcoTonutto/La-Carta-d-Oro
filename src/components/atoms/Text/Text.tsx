import styled, { css } from 'styled-components';
import type { BaseComponentProps } from '../../../types/base';

type TextVariant = 'body' | 'muted' | 'small' | 'lead';
type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends BaseComponentProps {
  variant?: TextVariant;
  align?: TextAlign;
  as?: 'p' | 'span' | 'div';
}

const variantStyles = {
  body: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.ivory};
  `,
  muted: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textMuted};
  `,
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  `,
  lead: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.ivory};
    line-height: 1.7;
  `,
};

const StyledText = styled.p<{ $variant: TextVariant; $align: TextAlign }>`
  ${({ $variant }) => variantStyles[$variant]}
  text-align: ${({ $align }) => $align};
`;

export function Text({
  children,
  variant = 'body',
  align = 'left',
  as = 'p',
  className,
}: TextProps) {
  return (
    <StyledText as={as} $variant={variant} $align={align} className={className}>
      {children}
    </StyledText>
  );
}
