import styled from 'styled-components';
import { useState } from 'react';
import { Heading, Text } from '../../atoms';

export interface AccordionItemProps {
  title: string;
  content: string;
  items?: string[];
  defaultOpen?: boolean;
}

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba.gold20};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

const Trigger = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ $isOpen, theme }) =>
    $isOpen ? theme.rgba.gold08 : theme.colors.surface};
  color: ${({ theme }) => theme.colors.ivory};
  text-align: left;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.rgba.gold10};
  }
`;

const Chevron = styled.span<{ $isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.gold};
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
  transition: transform ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Panel = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
`;

const ItemList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export function AccordionItem({
  title,
  content,
  items,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Item>
      <Trigger
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <Heading level={4}>{title}</Heading>
        <Chevron $isOpen={isOpen}>▼</Chevron>
      </Trigger>
      {isOpen && (
        <Panel>
          <Text variant="muted">{content}</Text>
          {items && items.length > 0 && (
            <ItemList>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ItemList>
          )}
        </Panel>
      )}
    </Item>
  );
}
