import styled from 'styled-components';
import { PhaseStep } from '../../molecules';
import type { GamePhase } from '../../../types/game';

export interface PhaseTimelineProps {
  phases: GamePhase[];
}

const Timeline = styled.div`
  max-width: 800px;
`;

export function PhaseTimeline({ phases }: PhaseTimelineProps) {
  return (
    <Timeline>
      {phases.map((phase, index) => (
        <PhaseStep
          key={phase.id}
          number={phase.number}
          title={phase.title}
          description={phase.description}
          criteria={phase.criteria}
          isLast={index === phases.length - 1}
        />
      ))}
    </Timeline>
  );
}
