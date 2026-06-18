import styled from 'styled-components';
import { Label, Select, Button } from '../../atoms';

export interface CalculatorPairSelectorProps {
  designerLabel: string;
  judgeLabel: string;
  designerOptions: { value: number; label: string }[];
  judgeOptions: { value: number; label: string }[];
  selectedDesignerIndex: number;
  selectedJudgeIndex: number;
  onDesignerChange: (index: number) => void;
  onJudgeChange: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  previousLabel: string;
  nextLabel: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const NavRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }

  button {
    flex: 1;
    min-height: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-height: 3.25rem;
      width: 100%;
    }
  }
`;

export function CalculatorPairSelector({
  designerLabel,
  judgeLabel,
  designerOptions,
  judgeOptions,
  selectedDesignerIndex,
  selectedJudgeIndex,
  onDesignerChange,
  onJudgeChange,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  previousLabel,
  nextLabel,
}: CalculatorPairSelectorProps) {
  return (
    <div>
      <Grid>
        <Field>
          <Label htmlFor="calc-designer">{designerLabel}</Label>
          <Select
            id="calc-designer"
            value={selectedDesignerIndex}
            onChange={(v) => onDesignerChange(Number(v))}
            options={designerOptions}
          />
        </Field>
        <Field>
          <Label htmlFor="calc-judge">{judgeLabel}</Label>
          <Select
            id="calc-judge"
            value={selectedJudgeIndex}
            onChange={(v) => onJudgeChange(Number(v))}
            options={judgeOptions}
          />
        </Field>
      </Grid>
      <NavRow>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={onPrevious}
          disabled={!canGoPrevious}
        >
          {previousLabel}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={onNext}
          disabled={!canGoNext}
        >
          {nextLabel}
        </Button>
      </NavRow>
    </div>
  );
}
