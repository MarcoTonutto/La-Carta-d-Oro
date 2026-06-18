import styled from 'styled-components';
import { Hero } from '../components/organisms';
import { CtaCard } from '../components/molecules';
import { SectionLayout } from '../components/templates';
import { Heading, Text, Divider } from '../components/atoms';
import { useTranslation } from '../hooks/useTranslation';

const PitchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const CtaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PitchCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.rgba.gold20};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
        ctaLabel={t.home.heroCta}
        ctaTo="/gioca"
      />

      <SectionLayout>
        <Heading level={2} align="center" variant="gold">
          {t.home.formatTitle}
        </Heading>
        <Text variant="lead" align="center">
          {t.home.formatLead}
        </Text>
        <PitchGrid>
          {t.home.pitchPoints.map((point) => (
            <PitchCard key={point.title}>
              <Heading level={4}>{point.title}</Heading>
              <Text variant="muted">{point.description}</Text>
            </PitchCard>
          ))}
        </PitchGrid>
      </SectionLayout>

      <SectionLayout centered>
        <Divider />
        <Heading level={2} variant="gold">
          {t.home.exploreTitle}
        </Heading>
        <CtaGrid>
          <CtaCard
            to="/gioca"
            title={t.home.ctaPlayTitle}
            description={t.home.ctaPlayDescription}
            icon="📜"
          />
          <CtaCard
            to="/calcolatore"
            title={t.home.ctaCalculatorTitle}
            description={t.home.ctaCalculatorDescription}
            icon="🏆"
          />
        </CtaGrid>
      </SectionLayout>
    </>
  );
}
