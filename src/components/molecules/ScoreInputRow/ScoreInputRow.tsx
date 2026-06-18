import styled from 'styled-components';
import { ScoreInput } from '../../atoms';

export interface ScoreInputRowProps {
  label: string;
  fields: { key: string; label: string; value: number; onChange: (v: number) => void }[];
}

const Row = styled.div`
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }
`;

const RowLabel = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.ivory};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FieldCell = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.rgba.gold05};
    border-radius: ${({ theme }) => theme.radii.md};
    border: 1px solid ${({ theme }) => theme.rgba.gold15};
  }
`;

export function ScoreInputRow({ label, fields }: ScoreInputRowProps) {
  return (
    <Row>
      <RowLabel>{label}</RowLabel>
      <Fields>
        {fields.map((field) => (
          <FieldCell key={field.key}>
            <ScoreInput
              label={field.label}
              value={field.value}
              onChange={field.onChange}
            />
          </FieldCell>
        ))}
      </Fields>
    </Row>
  );
}
