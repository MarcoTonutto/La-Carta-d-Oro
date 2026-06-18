import styled from 'styled-components';
import { sectionPadding } from '../../../styles/mixins';
import type { BaseComponentProps } from '../../../types/base';

export interface SectionLayoutProps extends BaseComponentProps {
  id?: string;
  centered?: boolean;
}

const Section = styled.section<{ $centered: boolean }>`
  ${sectionPadding}
  max-width: 1200px;
  margin: 0 auto;
  ${({ $centered }) => $centered && 'text-align: center;'}
`;

export function SectionLayout({
  children,
  id,
  centered = false,
  className,
}: SectionLayoutProps) {
  return (
    <Section id={id} $centered={centered} className={className}>
      {children}
    </Section>
  );
}
