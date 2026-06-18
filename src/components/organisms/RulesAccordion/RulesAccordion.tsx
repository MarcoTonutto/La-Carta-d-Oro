import styled from 'styled-components';
import { AccordionItem } from '../../molecules';
import type { RuleSection } from '../../../types/game';

export interface RulesAccordionProps {
  sections: RuleSection[];
}

const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 800px;
`;

export function RulesAccordion({ sections }: RulesAccordionProps) {
  return (
    <Accordion>
      {sections.map((section, index) => (
        <AccordionItem
          key={section.id}
          title={section.title}
          content={section.content}
          items={section.items}
          defaultOpen={index === 0}
        />
      ))}
    </Accordion>
  );
}
