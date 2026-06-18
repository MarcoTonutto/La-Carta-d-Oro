import type { Translations } from '../../types/i18n';

export const en: Translations = {
  meta: {
    title: 'La Carta d\'Oro — Magic: The Gathering',
    description:
      'La Carta d\'Oro — A fan-made Magic: The Gathering format. A concours d\'elegance with 5 cards.',
  },
  nav: {
    home: 'Home',
    play: 'How to Play',
    calculator: 'Calculator',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  footer: {
    tagline: 'La Carta d\'Oro — Fan-made format for Magic: The Gathering',
    disclaimer: 'Not affiliated with Wizards of the Coast',
  },
  home: {
    heroTitle: 'La Carta d\'Oro',
    heroSubtitle:
      'An elegance and beauty contest for Magic: The Gathering. Five cards, discerning judges, elegance and coherence over competitive power.',
    heroCta: 'Learn how to play',
    formatTitle: 'The format',
    formatLead:
      'Five cards. One concept. Demanding judges. Welcome to the Magic: The Gathering concours d\'elegance.',
    exploreTitle: 'Explore',
    ctaPlayTitle: 'How to Play',
    ctaPlayDescription:
      'The complete official rulebook: setup, judging phases, and determining the winner.',
    ctaCalculatorTitle: 'Calculator',
    ctaCalculatorDescription:
      'Enter votes and calculate the final score automatically.',
    pitchPoints: [
      {
        title: '5 cards, one concept',
        description:
          'Each participant secretly selects 5 cards from their collection and presents them as an art collection.',
      },
      {
        title: 'Judges, not opponents',
        description:
          'Free-for-all: everyone votes, no one votes for themselves. The goal is to impress with class and originality.',
      },
      {
        title: 'Two judging phases',
        description:
          'First each card walks the runway individually, then the full ensemble is judged for visual and thematic coherence.',
      },
    ],
  },
  play: {
    pageTitle: 'How to Play',
    pageLead:
      'La Carta d\'Oro (5-Cards) — Free-for-all. Each participant secretly selects and presents their own Set of 5 cards. Turn by turn, one player acts as Curator of their own exhibition while everyone else at the table acts as a Judge (players cannot vote for themselves). Inspired by the great European concours d\'elegance, this format rewards class, coherence, and visual originality over the raw power of competitive play.',
    setupTitle: 'Setup and Requirements',
    setup: {
      id: 'setup',
      title: '',
      content:
        'Each participant secretly selects exactly 5 cards from their collection. Any set, rarity, and language is allowed, including Foil, Secret Lair, Borderless, Retro Frame, or Altered versions. Every language is permitted, but it is recommended to choose cards that other participants can read — otherwise you risk low scores in the Text evaluation.',
      items: [
        'Players: 3 to 10. You can play with more participants, but voting will take significantly longer',
        'The Set: exactly 5 cards per participant, chosen in secret',
        'Materials: pen and paper (or smartphone) to record the scores awarded to opponents',
      ],
    },
    phasesTitle: 'Judging Phases',
    phases: [
      {
        id: 'phase1',
        number: 1,
        title: 'Phase 1: The Single Card Runway',
        description:
          'One by one, players take turns becoming the Curator of their own exhibition. The Curator presents their first card to the table. The Judges analyze the piece and award a score from 0 to 10 based on three parameters. This process is repeated for all 5 cards of the current Curator. Below are the 3 parameters to base your vote on.',
        criteria: [
          {
            id: 'art',
            name: 'The Art (0-10)',
            description:
              'The quality of the artwork, illustration style, use of color, and the visual impact of the piece.',
          },
          {
            id: 'text',
            name: 'The Text (0-10)',
            description:
              'The charm and elegance of the card\'s name, the evocativeness of its flavor text, or the poetic nature of its abilities.',
          },
          {
            id: 'singleOriginality',
            name: 'Single Originality (0-10)',
            description:
              'How unique, unexpected, and outside-the-box is this specific choice? This rewards the ability to unearth hidden gems or forgotten classics instead of relying on standard Magic clichés.',
          },
        ],
      },
      {
        id: 'phase2',
        number: 2,
        title: 'Phase 2: Judging the Ensemble',
        description:
          'After showcasing the cards individually, the Curator lines up all 5 cards on the table, side by side, revealing their "exhibition" in its entirety. Like an art exhibition curator, they may briefly explain the concept behind their selection. Below are the 3 parameters to base your ensemble vote on:',
        criteria: [
          {
            id: 'visualCoherence',
            name: 'Visual Coherence (0-10)',
            description:
              'Do the cards look good together? Is there harmony in color palettes, artistic styles, illustrators, or choice of borders and frames?',
          },
          {
            id: 'thematicCoherence',
            name: 'Thematic Coherence / Lore (0-10)',
            description:
              'Do the cards tell a story, a progression, or a logical concept? (e.g. the 5 stages of grief, a Dominaria faction, a coordinated creature tribe).',
          },
          {
            id: 'ensembleOriginality',
            name: 'Ensemble Originality (0-10)',
            description:
              'How brilliant, clever, or witty is the idea binding these 5 cards together? This rewards the most inventive or abstract concepts (e.g. "Five cards where a cat appears somewhere in the art").',
          },
        ],
      },
    ],
    scoringTitle: 'Determining the Winner',
    scoring: {
      id: 'scoring',
      title: '',
      content:
        'Once every player has finished their runway, each participant calculates their final score based on the average of the votes received from the other participants. The maximum attainable score is 60 points (50% weight on the quality of individual cards, 50% weight on the overall ensemble concept). The player with the highest score wins the exhibition and is crowned champion of La Carta d\'Oro.',
      items: [
        'Card Score (Phase 1): sum of all votes for individual cards ÷ 5 ÷ number of judges → Average Card Score (max 30)',
        'Ensemble Score (Phase 2): sum of ensemble votes ÷ number of judges → Average Ensemble Score (max 30)',
        'Final Score = Average Card Score + Average Ensemble Score (max 60)',
        'In case of a tie: the player with the highest Ensemble Originality score claims victory',
      ],
    },
    calculatorCta: 'Go to score calculator',
    sheetTitle: 'Printable score sheet',
    sheetDescription:
      'Configure the number of players, assign names, and download the PDF sheet to record votes with pen and paper.',
    playersLabel: 'Players',
    playersCountHint:
      'Recommended: 3–10 players. The game still works with more, but voting takes much longer.',
    editPlayerNames: 'Edit player names',
    hidePlayerNames: 'Hide player names',
    judgesLabel: 'Judges',
  },
  calculator: {
    pageTitle: 'Score calculator',
    pageLead:
      'Enter judge votes to calculate the final score. Max 60 points (30 cards + 30 ensemble).',
    configTitle: 'Configuration',
    playerCountLabel: 'Number of players',
    playerCountHint:
      'Recommended 3–10. With more than 10 players, voting takes significantly longer.',
    judgesHint:
      'Judges per curator: {{count}} (each player cannot vote for themselves)',
    curatorNameLabel: 'Curator name',
    phase1Title: 'Phase 1 — Single card runway',
    phase2Title: 'Phase 2 — Judging the ensemble',
    ensembleLabel: 'Ensemble',
    standingsTitle: 'Standings',
    tieBreakNotice: 'Tie broken by highest Ensemble Originality score',
    votingTitle: 'Enter votes',
    selectCuratorLabel: 'Curator to evaluate',
    selectJudgeLabel: 'Judge voting',
    previousPair: '← Previous',
    nextPair: 'Next →',
    editPlayerNames: 'Edit player names',
    hidePlayerNames: 'Hide player names',
    revealResults: 'Reveal final standings',
    hideResults: 'Hide standings',
    legendTitle: 'Voting parameters guide',
    legendIntro:
      'Each judge assigns a score from 0 to 10 for every parameter. Use the + and − buttons to adjust votes. 0 = absent or irrelevant, 10 = excellent. You cannot vote for yourself when you are the Curator.',
    cardParameterLabels: {
      art: 'Art',
      text: 'Text',
      singleOriginality: 'Originality',
    },
    ensembleParameterLabels: {
      visualCoherence: 'Visual Coherence',
      thematicCoherence: 'Thematic Coherence',
      ensembleOriginality: 'Ensemble Originality',
    },
  },
  scoreSheet: {
    printButton: 'Download score sheet (PDF)',
    title: 'La Carta d\'Oro — Score sheets',
    judgeSheetTitle: 'Judge sheet',
    phase1Subtitle: 'Phase 1: Single card runway (0-10 per parameter)',
    curatorLabel: 'Curator',
    cardColumn: 'Card',
    judgeColumn: 'Judge',
    totalColumn: 'Total',
    cardLabel: 'Card',
    judgeLabel: 'Judge',
    phase2Title: 'Phase 2: Ensemble (0-10 per parameter)',
    recapTitle: 'Score recap',
    recapSubtitle:
      'Use this page to tally all judge sheets and compute final standings. Sum Phase 1 and Phase 2 votes per curator, then calculate averages.',
    playerColumn: 'Player',
    phase1SumColumn: 'Phase 1 sum',
    phase2SumColumn: 'Phase 2 sum',
    cardScoreColumn: 'Avg cards (max 30)',
    ensembleScoreColumn: 'Avg ensemble (max 30)',
    finalScoreColumn: 'Final score (max 60)',
    tieBreakNote:
      'Tie-break: the player with the highest average Ensemble Originality score wins.',
  },
  playerScore: {
    champion: 'Champion',
    avgCards: 'Avg cards (max 30)',
    avgEnsemble: 'Avg ensemble (max 30)',
    finalScore: 'Final score (max 60)',
    ensembleOriginality: 'Ensemble Originality',
  },
  common: {
    player: 'Player',
    judge: 'Judge',
    appName: 'La Carta d\'Oro',
    loading: 'Loading cards…',
  },
};
