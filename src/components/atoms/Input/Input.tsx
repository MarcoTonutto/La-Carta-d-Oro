import styled from 'styled-components';

export interface InputProps {
  id?: string;
  type?: 'text' | 'number';
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  className?: string;
  disabled?: boolean;
}

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.rgba.gold30};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.ivory};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }

  &:disabled {
    opacity: 0.5;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export function Input({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  min,
  max,
  className,
  disabled,
}: InputProps) {
  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
      className={className}
      disabled={disabled}
    />
  );
}
