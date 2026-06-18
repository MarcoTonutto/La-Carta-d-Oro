import styled from 'styled-components';

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps {
  id?: string;
  value: string | number;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
}

const StyledSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.rgba.gold30};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.ivory};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

export function Select({ id, value, onChange, options, className }: SelectProps) {
  return (
    <StyledSelect
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
