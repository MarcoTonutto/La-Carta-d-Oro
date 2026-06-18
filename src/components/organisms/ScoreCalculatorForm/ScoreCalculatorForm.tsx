import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { Card, Heading, Text, Label, Input, Button } from '../../atoms';
import { CalculatorPairSelector, CalculatorVotePanel } from '../../molecules';
import { CalculatorResults } from '../CalculatorResults';
import { VotingLegend } from '../VotingLegend';
import { useScoreCalculator } from '../../../hooks/useScoreCalculator';
import { useTranslation } from '../../../hooks/useTranslation';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const SetupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-end;
`;

const SetupField = styled.div`
  min-width: 200px;
`;

const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const NameField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export function ScoreCalculatorForm() {
  const { t } = useTranslation();
  const {
    playerCount,
    judgeCount,
    players,
    result,
    updatePlayerCount,
    updatePlayerName,
    updateCardVote,
    updateEnsembleVote,
  } = useScoreCalculator({ playerPrefix: t.common.player });

  const [selectedDesignerIndex, setSelectedDesignerIndex] = useState(0);
  const [selectedJudgeIndex, setSelectedJudgeIndex] = useState(0);
  const [showPlayerNames, setShowPlayerNames] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setSelectedDesignerIndex((index) =>
      Math.min(index, Math.max(players.length - 1, 0)),
    );
    setSelectedJudgeIndex((index) =>
      Math.min(index, Math.max(judgeCount - 1, 0)),
    );
  }, [players.length, judgeCount]);

  const cardLabels = t.calculator.cardParameterLabels;
  const ensembleLabels = t.calculator.ensembleParameterLabels;

  const activePlayer = players[selectedDesignerIndex];
  const activeVote = activePlayer?.votes[selectedJudgeIndex];

  const totalPairs = players.length * judgeCount;
  const currentPairIndex =
    selectedDesignerIndex * judgeCount + selectedJudgeIndex;

  const goToPair = useCallback(
    (pairIndex: number) => {
      const safeIndex = Math.max(0, Math.min(pairIndex, totalPairs - 1));
      setSelectedDesignerIndex(Math.floor(safeIndex / judgeCount));
      setSelectedJudgeIndex(safeIndex % judgeCount);
    },
    [judgeCount, totalPairs],
  );

  const designerOptions = players.map((player, index) => ({
    value: index,
    label: player.name,
  }));

  const judgeOptions = Array.from({ length: judgeCount }, (_, index) => ({
    value: index,
    label: `${t.common.judge} ${index + 1}`,
  }));

  if (!activePlayer || !activeVote) {
    return null;
  }

  return (
    <Form>
      <Card padding="lg">
        <Heading level={3}>{t.calculator.configTitle}</Heading>
        <SetupRow>
          <SetupField>
            <Label htmlFor="playerCount">{t.calculator.playerCountLabel}</Label>
            <Input
              id="playerCount"
              type="number"
              value={playerCount}
              onChange={(v) => updatePlayerCount(Number(v))}
              min={2}
              max={8}
            />
          </SetupField>
          <Text variant="muted">
            {t.calculator.judgesHint.replace('{{count}}', String(judgeCount))}
          </Text>
        </SetupRow>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowPlayerNames((prev) => !prev)}
        >
          {showPlayerNames
            ? t.calculator.hidePlayerNames
            : t.calculator.editPlayerNames}
        </Button>

        {showPlayerNames && (
          <NamesGrid>
            {players.map((player, index) => (
              <NameField key={index}>
                <Label htmlFor={`player-name-${index}`}>
                  {t.calculator.designerNameLabel} {index + 1}
                </Label>
                <Input
                  id={`player-name-${index}`}
                  value={player.name}
                  onChange={(v) => updatePlayerName(index, v)}
                />
              </NameField>
            ))}
          </NamesGrid>
        )}
      </Card>

      <VotingLegend />

      <Card padding="lg">
        <Heading level={3}>{t.calculator.votingTitle}</Heading>
        <CalculatorPairSelector
          designerLabel={t.calculator.selectDesignerLabel}
          judgeLabel={t.calculator.selectJudgeLabel}
          designerOptions={designerOptions}
          judgeOptions={judgeOptions}
          selectedDesignerIndex={selectedDesignerIndex}
          selectedJudgeIndex={selectedJudgeIndex}
          onDesignerChange={setSelectedDesignerIndex}
          onJudgeChange={setSelectedJudgeIndex}
          onPrevious={() => goToPair(currentPairIndex - 1)}
          onNext={() => goToPair(currentPairIndex + 1)}
          canGoPrevious={currentPairIndex > 0}
          canGoNext={currentPairIndex < totalPairs - 1}
          previousLabel={t.calculator.previousPair}
          nextLabel={t.calculator.nextPair}
        />
      </Card>

      <CalculatorVotePanel
        designerName={activePlayer.name}
        judgeLabel={`${t.common.judge} ${selectedJudgeIndex + 1}`}
        vote={activeVote}
        phase1Title={t.calculator.phase1Title}
        phase2Title={t.calculator.phase2Title}
        ensembleLabel={t.calculator.ensembleLabel}
        cardLabel={t.scoreSheet.cardLabel}
        cardParameterLabels={cardLabels}
        ensembleParameterLabels={ensembleLabels}
        onCardVoteChange={(cardIndex, field, value) =>
          updateCardVote(
            selectedDesignerIndex,
            selectedJudgeIndex,
            cardIndex,
            field,
            value,
          )
        }
        onEnsembleVoteChange={(field, value) =>
          updateEnsembleVote(
            selectedDesignerIndex,
            selectedJudgeIndex,
            field,
            value,
          )
        }
      />

      {result && (
        <CalculatorResults
          result={result}
          standingsTitle={t.calculator.standingsTitle}
          tieBreakNotice={t.calculator.tieBreakNotice}
          revealButtonLabel={t.calculator.revealResults}
          hideButtonLabel={t.calculator.hideResults}
          isVisible={showResults}
          onToggle={() => setShowResults((prev) => !prev)}
        />
      )}
    </Form>
  );
}
