import styled from 'styled-components';

export interface ScoreInputProps {
  id?: string;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
  min-width: 0;
`;

const ScoreLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const Stepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

const StepButton = styled.button`
  flex-shrink: 0;
  min-width: 3rem;
  min-height: 3rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border: 1px solid ${({ theme }) => theme.rgba.gold30};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  line-height: 1;
  transition: all ${({ theme }) => theme.transitions.fast};
  touch-action: manipulation;
  user-select: none;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.rgba.gold15};
    border-color: ${({ theme }) => theme.colors.gold};
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 3.25rem;
    min-height: 3.25rem;
    width: 3.25rem;
    height: 3.25rem;
  }
`;

const ValueDisplay = styled.div`
  flex: 1;
  min-width: 3rem;
  max-width: 4rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.rgba.gold30};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.ivory};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: none;
    min-height: 3.25rem;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

function clampScore(value: number): number {
  return Math.min(10, Math.max(0, value));
}

export function ScoreInput({ id, value, onChange, label, className }: ScoreInputProps) {
  const decrement = () => onChange(clampScore(value - 1));
  const increment = () => onChange(clampScore(value + 1));

  return (
    <Wrapper className={className}>
      {label && <ScoreLabel id={id ? `${id}-label` : undefined}>{label}</ScoreLabel>}
      <Stepper role="group" aria-labelledby={id ? `${id}-label` : undefined}>
        <HiddenInput
          id={id}
          type="number"
          min={0}
          max={10}
          value={value}
          readOnly
          tabIndex={-1}
          aria-hidden
        />
        <StepButton
          type="button"
          onClick={decrement}
          disabled={value <= 0}
          aria-label={label ? `${label} -1` : 'Decrease score'}
        >
          −
        </StepButton>
        <ValueDisplay aria-live="polite">{value}</ValueDisplay>
        <StepButton
          type="button"
          onClick={increment}
          disabled={value >= 10}
          aria-label={label ? `${label} +1` : 'Increase score'}
        >
          +
        </StepButton>
      </Stepper>
    </Wrapper>
  );
}
