import styled from 'styled-components';

export interface DividerProps {
  className?: string;
}

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.rgba.gold40},
    transparent
  );
  margin: ${({ theme }) => `${theme.spacing.lg} 0`};
`;

export function Divider({ className }: DividerProps) {
  return <StyledDivider className={className} />;
}
