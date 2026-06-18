import styled from 'styled-components';

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

const StyledLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  letter-spacing: 0.02em;
`;

export function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <StyledLabel htmlFor={htmlFor} className={className}>
      {children}
    </StyledLabel>
  );
}
