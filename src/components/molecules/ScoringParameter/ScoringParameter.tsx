import styled from 'styled-components';
import { Text } from '../../atoms';

export interface ScoringParameterProps {
  name: string;
  description: string;
}

const Parameter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.rgba.gold20};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const Name = styled.h4`
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export function ScoringParameter({ name, description }: ScoringParameterProps) {
  return (
    <Parameter>
      <Name>{name}</Name>
      <Text variant="small">{description}</Text>
    </Parameter>
  );
}
