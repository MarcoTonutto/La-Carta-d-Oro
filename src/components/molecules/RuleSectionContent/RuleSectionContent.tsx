import styled from 'styled-components';
import { Text } from '../../atoms';

export interface RuleSectionContentProps {
  content: string;
  items?: string[];
}

const Wrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ItemList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  li {
    line-height: 1.6;
  }
`;

export function RuleSectionContent({ content, items }: RuleSectionContentProps) {
  return (
    <Wrapper>
      <Text variant="muted">{content}</Text>
      {items && items.length > 0 && (
        <ItemList>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ItemList>
      )}
    </Wrapper>
  );
}
