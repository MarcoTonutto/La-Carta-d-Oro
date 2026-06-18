import styled from 'styled-components';
import { Button, Heading, Text } from '../../atoms';
import { useTranslation } from '../../../hooks/useTranslation';

export interface ScoreSheetPreviewProps {
  playerNames: string[];
  judgeCount: number;
}

const Sheet = styled.div`
  @media print {
    padding: 1rem;
    color: black;
    background: white;
  }
`;

const PrintHeader = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  @media not print {
    margin-bottom: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  font-size: 0.85rem;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.4rem;
    text-align: center;
  }

  th {
    background: #f5f5f5;
    font-weight: 600;
  }

  .designer-label {
    text-align: left;
    font-weight: 600;
  }

  @media not print {
    th {
      background: ${({ theme }) => theme.rgba.gold10};
      color: ${({ theme }) => theme.colors.gold};
    }

    td,
    th {
      border-color: ${({ theme }) => theme.rgba.gold30};
    }
  }
`;

const PrintActions = styled.div`
  margin-bottom: 2rem;

  @media print {
    display: none;
  }
`;

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.gold};
  margin: 1.5rem 0 0.75rem;

  @media print {
    color: black;
  }
`;

export function ScoreSheetPreview({ playerNames, judgeCount }: ScoreSheetPreviewProps) {
  const { t } = useTranslation();
  const cardLabels = t.calculator.cardParameterLabels;
  const ensembleLabels = t.calculator.ensembleParameterLabels;

  const handlePrint = () => window.print();

  return (
    <Sheet className="score-sheet">
      <PrintActions>
        <Button onClick={handlePrint}>{t.scoreSheet.printButton}</Button>
      </PrintActions>

      <PrintHeader>
        <Heading level={2}>{t.scoreSheet.title}</Heading>
        <Text variant="muted">{t.scoreSheet.phase1Subtitle}</Text>
      </PrintHeader>

      {playerNames.map((name) => (
        <div key={name}>
          <SectionTitle>
            {t.scoreSheet.designerLabel}: {name}
          </SectionTitle>
          <Table>
            <thead>
              <tr>
                <th>{t.scoreSheet.cardColumn}</th>
                <th>{t.scoreSheet.judgeColumn}</th>
                <th>{cardLabels.art}</th>
                <th>{cardLabels.text}</th>
                <th>{cardLabels.singleOriginality}</th>
                <th>{t.scoreSheet.totalColumn}</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }, (_, cardIndex) =>
                Array.from({ length: judgeCount }, (_, judgeIndex) => (
                  <tr key={`${cardIndex}-${judgeIndex}`}>
                    {judgeIndex === 0 && (
                      <td rowSpan={judgeCount} className="designer-label">
                        {t.scoreSheet.cardLabel} {cardIndex + 1}
                      </td>
                    )}
                    <td>
                      {t.common.judge} {judgeIndex + 1}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )),
              )}
            </tbody>
          </Table>

          <SectionTitle>
            {t.scoreSheet.phase2Title} — {name}
          </SectionTitle>
          <Table>
            <thead>
              <tr>
                <th>{t.scoreSheet.judgeColumn}</th>
                <th>{ensembleLabels.visualCoherence}</th>
                <th>{ensembleLabels.thematicCoherence}</th>
                <th>{ensembleLabels.ensembleOriginality}</th>
                <th>{t.scoreSheet.totalColumn}</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: judgeCount }, (_, judgeIndex) => (
                <tr key={judgeIndex}>
                  <td>
                    {t.common.judge} {judgeIndex + 1}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </Sheet>
  );
}
