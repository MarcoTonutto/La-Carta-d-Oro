import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface ScoreSheetPdfLabels {
  title: string;
  judgeSheetTitle: string;
  phase1Subtitle: string;
  phase2Title: string;
  designerLabel: string;
  cardColumn: string;
  totalColumn: string;
  cardLabel: string;
  recapTitle: string;
  recapSubtitle: string;
  playerColumn: string;
  phase1SumColumn: string;
  phase2SumColumn: string;
  cardScoreColumn: string;
  ensembleScoreColumn: string;
  finalScoreColumn: string;
  tieBreakNote: string;
  cardParameters: {
    art: string;
    text: string;
    singleOriginality: string;
  };
  ensembleParameters: {
    visualCoherence: string;
    thematicCoherence: string;
    ensembleOriginality: string;
  };
}

const PAGE_MARGIN = 14;
const HEADER_FILL: [number, number, number] = [245, 245, 245];

type PdfWithAutoTable = jsPDF & { lastAutoTable: { finalY: number } };

const TABLE_STYLES = {
  theme: 'grid' as const,
  styles: {
    fontSize: 9,
    cellPadding: 2.5,
    minCellHeight: 9,
    lineColor: [80, 80, 80] as [number, number, number],
    lineWidth: 0.1,
  },
  headStyles: {
    fillColor: HEADER_FILL,
    textColor: [0, 0, 0] as [number, number, number],
    fontStyle: 'bold' as const,
    halign: 'center' as const,
  },
  margin: { left: PAGE_MARGIN, right: PAGE_MARGIN },
  showHead: 'everyPage' as const,
};

function getLastTableY(doc: jsPDF): number {
  return (doc as PdfWithAutoTable).lastAutoTable.finalY;
}

function buildPhase1Rows(labels: ScoreSheetPdfLabels): string[][] {
  return Array.from({ length: 5 }, (_, cardIndex) => [
    `${labels.cardLabel} ${cardIndex + 1}`,
    '',
    '',
    '',
    '',
  ]);
}

function addDesignerBlock(
  doc: jsPDF,
  designerName: string,
  labels: ScoreSheetPdfLabels,
  startY: number,
): number {
  let y = startY;

  if (y > 250) {
    doc.addPage();
    y = PAGE_MARGIN;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(`${labels.designerLabel}: ${designerName}`, PAGE_MARGIN, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(labels.phase1Subtitle, PAGE_MARGIN, y);
  y += 3;

  autoTable(doc, {
    startY: y + 1,
    head: [
      [
        labels.cardColumn,
        labels.cardParameters.art,
        labels.cardParameters.text,
        labels.cardParameters.singleOriginality,
        labels.totalColumn,
      ],
    ],
    body: buildPhase1Rows(labels),
    ...TABLE_STYLES,
    columnStyles: {
      0: { cellWidth: 28, halign: 'left' },
      1: { cellWidth: 30, halign: 'center' },
      2: { cellWidth: 30, halign: 'center' },
      3: { cellWidth: 34, halign: 'center' },
      4: { cellWidth: 22, halign: 'center' },
    },
  });

  const afterPhase1 = getLastTableY(doc) + 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(labels.phase2Title, PAGE_MARGIN, afterPhase1);

  autoTable(doc, {
    startY: afterPhase1 + 3,
    head: [
      [
        labels.ensembleParameters.visualCoherence,
        labels.ensembleParameters.thematicCoherence,
        labels.ensembleParameters.ensembleOriginality,
        labels.totalColumn,
      ],
    ],
    body: [['', '', '', '']],
    ...TABLE_STYLES,
    columnStyles: {
      0: { cellWidth: 42, halign: 'center' },
      1: { cellWidth: 42, halign: 'center' },
      2: { cellWidth: 42, halign: 'center' },
      3: { cellWidth: 28, halign: 'center' },
    },
  });

  return getLastTableY(doc) + 10;
}

function addJudgeSheet(
  doc: jsPDF,
  judgeName: string,
  designersToScore: string[],
  labels: ScoreSheetPdfLabels,
  isFirstPage: boolean,
): void {
  if (!isFirstPage) {
    doc.addPage();
  }

  let y = isFirstPage ? 30 : PAGE_MARGIN;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(`${labels.judgeSheetTitle}: ${judgeName}`, PAGE_MARGIN, y);
  y += 10;

  designersToScore.forEach((designer) => {
    y = addDesignerBlock(doc, designer, labels, y);
  });
}

function addRecapPage(
  doc: jsPDF,
  playerNames: string[],
  labels: ScoreSheetPdfLabels,
): void {
  doc.addPage();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(labels.recapTitle, PAGE_MARGIN, 20);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const subtitleLines = doc.splitTextToSize(labels.recapSubtitle, 182);
  doc.text(subtitleLines, PAGE_MARGIN, 28);

  const startY = 28 + subtitleLines.length * 4 + 4;

  autoTable(doc, {
    startY,
    head: [
      [
        labels.playerColumn,
        labels.phase1SumColumn,
        labels.phase2SumColumn,
        labels.cardScoreColumn,
        labels.ensembleScoreColumn,
        labels.finalScoreColumn,
      ],
    ],
    body: playerNames.map((name) => [name, '', '', '', '', '']),
    ...TABLE_STYLES,
    columnStyles: {
      0: { cellWidth: 34, halign: 'left' },
      1: { cellWidth: 28, halign: 'center' },
      2: { cellWidth: 28, halign: 'center' },
      3: { cellWidth: 30, halign: 'center' },
      4: { cellWidth: 32, halign: 'center' },
      5: { cellWidth: 30, halign: 'center' },
    },
  });

  const afterTable = getLastTableY(doc) + 8;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  const tieBreakLines = doc.splitTextToSize(labels.tieBreakNote, 182);
  doc.text(tieBreakLines, PAGE_MARGIN, afterTable);
}

function addPageNumbers(doc: jsPDF): void {
  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(`${page} / ${pageCount}`, 196, 290, { align: 'right' });
    doc.setTextColor(0, 0, 0);
  }
}

export function downloadScoreSheetPdf(
  playerNames: string[],
  labels: ScoreSheetPdfLabels,
): void {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(labels.title, PAGE_MARGIN, 20);

  playerNames.forEach((judgeName, judgeIndex) => {
    const designersToScore = playerNames.filter((_, index) => index !== judgeIndex);

    addJudgeSheet(doc, judgeName, designersToScore, labels, judgeIndex === 0);
  });

  addRecapPage(doc, playerNames, labels);
  addPageNumbers(doc);

  doc.save('la-carta-doro-score-sheet.pdf');
}
