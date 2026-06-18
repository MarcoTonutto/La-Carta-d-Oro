import styled from 'styled-components';
import { Label, Select, Button } from '../../atoms';

export interface CalculatorPairSelectorProps {
  curatorLabel: string;
  judgeLabel: string;
  curatorOptions: { value: number; label: string }[];
  judgeOptions: { value: number; label: string }[];
  selectedCuratorIndex: number;
  selectedJudgeIndex: number;
  onCuratorChange: (index: number) => void;
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
  curatorLabel,
  judgeLabel,
  curatorOptions,
  judgeOptions,
  selectedCuratorIndex,
  selectedJudgeIndex,
  onCuratorChange,
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
          <Label htmlFor="calc-curator">{curatorLabel}</Label>
          <Select
            id="calc-curator"
            value={selectedCuratorIndex}
            onChange={(v) => onCuratorChange(Number(v))}
            options={curatorOptions}
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
