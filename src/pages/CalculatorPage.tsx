import { SectionLayout } from '../components/templates';
import { Heading, Text } from '../components/atoms';
import { ScoreCalculatorForm } from '../components/organisms';
import { useTranslation } from '../hooks/useTranslation';

export function CalculatorPage() {
  const { t } = useTranslation();

  return (
    <>
      <SectionLayout centered>
        <Heading level={1} variant="display">
          {t.calculator.pageTitle}
        </Heading>
        <Text variant="lead" align="center">
          {t.calculator.pageLead}
        </Text>
      </SectionLayout>

      <SectionLayout>
        <ScoreCalculatorForm />
      </SectionLayout>
    </>
  );
}
