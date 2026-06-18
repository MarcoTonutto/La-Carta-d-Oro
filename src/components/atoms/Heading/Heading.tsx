import styled, { css } from 'styled-components';
import { goldGradientText } from '../../../styles/mixins';
import type { BaseComponentProps } from '../../../types/base';

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingVariant = 'default' | 'gold' | 'display';

export interface HeadingProps extends BaseComponentProps {
  level?: HeadingLevel;
  variant?: HeadingVariant;
  align?: 'left' | 'center' | 'right';
}

const levelStyles: Record<HeadingLevel, ReturnType<typeof css>> = {
  1: css`
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  `,
  2: css`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  `,
  3: css`
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `,
  4: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
};

const StyledHeading = styled.h1<{
  $level: HeadingLevel;
  $variant: HeadingVariant;
  $align: string;
}>`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: ${({ $align }) => $align};
  ${({ $level }) => levelStyles[$level]}

  ${({ $variant }) =>
    $variant === 'gold'
      ? goldGradientText
      : css`
          color: ${({ theme }) => theme.colors.ivory};
        `}

  ${({ $variant }) =>
    $variant === 'display' &&
    css`
      font-size: clamp(2.5rem, 6vw, 4rem);
      ${goldGradientText}
    `}
`;

export function Heading({
  children,
  level = 2,
  variant = 'default',
  align = 'left',
  className,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <StyledHeading
      as={Tag}
      $level={level}
      $variant={variant}
      $align={align}
      className={className}
    >
      {children}
    </StyledHeading>
  );
}
