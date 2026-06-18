import styled from 'styled-components';
import { useState } from 'react';
import { Button, Input, Label } from '../../atoms';
import { useTranslation } from '../../../hooks/useTranslation';

export interface ScoreSheetPrintProps {
  playerNames: string[];
  onPlayerNameChange: (index: number, name: string) => void;
}

const NamesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const NameField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export function ScoreSheetPrint({
  playerNames,
  onPlayerNameChange,
}: ScoreSheetPrintProps) {
  const { t } = useTranslation();
  const [showPlayerNames, setShowPlayerNames] = useState(true);

  const handleDownload = async () => {
    const { downloadScoreSheetPdf } = await import('../../../services/scoreSheetPdf');

    downloadScoreSheetPdf(playerNames, {
      title: t.scoreSheet.title,
      judgeSheetTitle: t.scoreSheet.judgeSheetTitle,
      phase1Subtitle: t.scoreSheet.phase1Subtitle,
      phase2Title: t.scoreSheet.phase2Title,
      designerLabel: t.scoreSheet.designerLabel,
      cardColumn: t.scoreSheet.cardColumn,
      totalColumn: t.scoreSheet.totalColumn,
      cardLabel: t.scoreSheet.cardLabel,
      recapTitle: t.scoreSheet.recapTitle,
      recapSubtitle: t.scoreSheet.recapSubtitle,
      playerColumn: t.scoreSheet.playerColumn,
      phase1SumColumn: t.scoreSheet.phase1SumColumn,
      phase2SumColumn: t.scoreSheet.phase2SumColumn,
      cardScoreColumn: t.scoreSheet.cardScoreColumn,
      ensembleScoreColumn: t.scoreSheet.ensembleScoreColumn,
      finalScoreColumn: t.scoreSheet.finalScoreColumn,
      tieBreakNote: t.scoreSheet.tieBreakNote,
      cardParameters: t.calculator.cardParameterLabels,
      ensembleParameters: t.calculator.ensembleParameterLabels,
    });
  };

  return (
    <>
      <NamesSection>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowPlayerNames((prev) => !prev)}
        >
          {showPlayerNames
            ? t.play.hidePlayerNames
            : t.play.editPlayerNames}
        </Button>

        {showPlayerNames && (
          <NamesGrid>
            {playerNames.map((name, index) => (
              <NameField key={index}>
                <Label htmlFor={`sheet-player-${index}`}>
                  {t.common.player} {index + 1}
                </Label>
                <Input
                  id={`sheet-player-${index}`}
                  value={name}
                  onChange={(value) => onPlayerNameChange(index, value)}
                />
              </NameField>
            ))}
          </NamesGrid>
        )}
      </NamesSection>

      <Button onClick={handleDownload}>{t.scoreSheet.printButton}</Button>
    </>
  );
}
