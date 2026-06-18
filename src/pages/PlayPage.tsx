import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PhaseTimeline, ScoreSheetPrint } from '../components/organisms';
import { RuleSectionContent } from '../components/molecules';
import { SectionLayout } from '../components/templates';
import { Heading, Text, Button, Divider } from '../components/atoms';
import { useTranslation } from '../hooks/useTranslation';

const SheetConfig = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledSelect = styled.select`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.rgba.gold30};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.ivory};
`;

const CalculatorCta = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const DEFAULT_NAME_PATTERN = /^(Giocatore|Player)\s+\d+$/;

export function PlayPage() {
  const { t } = useTranslation();
  const [playerCount, setPlayerCount] = useState(3);
  const judgeCount = Math.max(playerCount - 1, 1);
  const [playerNames, setPlayerNames] = useState<string[]>(() =>
    Array.from({ length: 3 }, (_, i) => `${t.common.player} ${i + 1}`),
  );

  useEffect(() => {
    setPlayerNames((prev) =>
      Array.from({ length: playerCount }, (_, i) => {
        const existing = prev[i];
        if (existing && !DEFAULT_NAME_PATTERN.test(existing)) {
          return existing;
        }
        return `${t.common.player} ${i + 1}`;
      }),
    );
  }, [playerCount, t.common.player]);

  const handlePlayerNameChange = (index: number, name: string) => {
    setPlayerNames((prev) => prev.map((n, i) => (i === index ? name : n)));
  };

  return (
    <>
      <SectionLayout centered>
        <Heading level={1} variant="display">
          {t.play.pageTitle}
        </Heading>
        <Text variant="lead" align="center">
          {t.play.pageLead}
        </Text>
      </SectionLayout>

      <SectionLayout>
        <Heading level={2} variant="gold">
          {t.play.setupTitle}
        </Heading>
        <RuleSectionContent
          content={t.play.setup.content}
          items={t.play.setup.items}
        />
      </SectionLayout>

      <SectionLayout>
        <Heading level={2} variant="gold">
          {t.play.phasesTitle}
        </Heading>
        <PhaseTimeline phases={t.play.phases} />
      </SectionLayout>

      <SectionLayout>
        <Divider />
        <Heading level={2} variant="gold">
          {t.play.scoringTitle}
        </Heading>
        <RuleSectionContent
          content={t.play.scoring.content}
          items={t.play.scoring.items}
        />
        <CalculatorCta>
          <Link to="/calcolatore">
            <Button>{t.play.calculatorCta}</Button>
          </Link>
        </CalculatorCta>
      </SectionLayout>

      <SectionLayout id="foglio-votazione">
        <Divider />
        <Heading level={2} variant="gold">
          {t.play.sheetTitle}
        </Heading>
        <Text variant="muted">{t.play.sheetDescription}</Text>
        <SheetConfig>
          <Field>
            <label htmlFor="sheet-players">{t.play.playersLabel}</label>
            <StyledSelect
              id="sheet-players"
              value={playerCount}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
            >
              {[3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </StyledSelect>
          </Field>
          <Text variant="small">{t.play.playersCountHint}</Text>
          <Text variant="small">
            {t.play.judgesLabel}: {judgeCount}
          </Text>
        </SheetConfig>
        <ScoreSheetPrint
          playerNames={playerNames}
          onPlayerNameChange={handlePlayerNameChange}
        />
      </SectionLayout>
    </>
  );
}
