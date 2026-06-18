import styled, { css } from 'styled-components';
import type { BaseComponentProps } from '../../../types/base';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles = {
  primary: css`
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.goldDark},
      ${({ theme }) => theme.colors.gold}
    );
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.gold};

    &:hover:not(:disabled) {
      box-shadow: ${({ theme }) => theme.shadows.glow};
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.gold};
    border: 1px solid ${({ theme }) => theme.colors.gold};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.rgba.gold10};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.ivory};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.gold};
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
};

const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: 500;
  letter-spacing: 0.03em;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all ${({ theme }) => theme.transitions.normal};
  text-decoration: none;

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  type = 'button',
  onClick,
  disabled,
  className,
}: ButtonProps) {
  if (as === 'a' && href) {
    return (
      <StyledButton
        as="a"
        href={href}
        $variant={variant}
        $size={size}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
