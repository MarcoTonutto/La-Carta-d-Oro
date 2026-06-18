import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading, Text, Button } from '../../atoms';
import { FloatingCards } from '../FloatingCards';
import { sectionPadding } from '../../../styles/mixins';

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const HeroSection = styled.section`
  ${sectionPadding}
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at center top,
      ${({ theme }) => theme.rgba.gold12} 0%,
      transparent 60%
    );
    pointer-events: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Subtitle = styled(Text)`
  max-width: 600px;
`;

const CtaWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export function Hero({ title, subtitle, ctaLabel, ctaTo }: HeroProps) {
  return (
    <HeroSection>
      <FloatingCards />
      <Content>
        <Heading level={1} variant="display">
          {title}
        </Heading>
        <Subtitle variant="lead" align="center">
          {subtitle}
        </Subtitle>
        {ctaLabel && ctaTo && (
          <CtaWrapper>
            <Link to={ctaTo}>
              <Button size="lg">{ctaLabel}</Button>
            </Link>
          </CtaWrapper>
        )}
      </Content>
    </HeroSection>
  );
}
