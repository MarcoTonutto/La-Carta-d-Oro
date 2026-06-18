import type { Translations } from '../../types/i18n';

export const it: Translations = {
  meta: {
    title: 'La Carta d\'Oro — Magic: The Gathering',
    description:
      'La Carta d\'Oro — Formato fan-made per Magic: The Gathering. Un concours d\'elegance con 5 carte.',
  },
  nav: {
    home: 'Home',
    play: 'Come si gioca',
    calculator: 'Calcolatore',
    menuOpen: 'Apri menu',
    menuClose: 'Chiudi menu',
  },
  footer: {
    tagline: 'La Carta d\'Oro — Formato fan-made per Magic: The Gathering',
    disclaimer: 'Non affiliato con Wizards of the Coast',
  },
  home: {
    heroTitle: 'La Carta d\'Oro',
    heroSubtitle:
      'Un concours d\'elegance per Magic: The Gathering. Cinque carte, giudici esigenti, eleganza e coerenza al posto della potenza competitiva.',
    heroCta: 'Scopri come si gioca',
    formatTitle: 'Il formato',
    formatLead:
      'Cinque carte. Un concetto. Giudici esigenti. Benvenuti al concours d\'elegance di Magic: The Gathering.',
    exploreTitle: 'Esplora',
    ctaPlayTitle: 'Come si gioca',
    ctaPlayDescription:
      'Il regolamento ufficiale completo: preparazione, fasi di giudizio e determinazione del vincitore.',
    ctaCalculatorTitle: 'Calcolatore',
    ctaCalculatorDescription:
      'Inserite i voti e calcolate il punteggio finale automaticamente.',
    pitchPoints: [
      {
        title: '5 carte, un concetto',
        description:
          'Ogni partecipante seleziona segretamente 5 carte dalla propria collezione e le presenta come una collezione d\'arte.',
      },
      {
        title: 'Giudici, non avversari',
        description:
          'Tutti contro tutti: tutti votano, nessuno vota sé stesso. L\'obiettivo è impressionare con classe e originalità.',
      },
      {
        title: 'Due fasi di giudizio',
        description:
          'Prima ogni carta sfila individualmente, poi l\'ensemble completo viene valutato nella sua coerenza visiva e tematica.',
      },
    ],
  },
  play: {
    pageTitle: 'Come si gioca',
    pageLead:
      'La Carta d\'Oro (5-Cards) — Tutti contro tutti. Ogni partecipante seleziona segretamente e presenta la propria selezione di 5 carte. A turno, un giocatore fa da Curatore della propria mostra mentre tutti gli altri al tavolo fungono da Giudici (nessuno può votare sé stesso). Ispirato ai grandi concours d\'elegance europei, questo formato premia classe, coerenza e originalità visiva più della potenza competitiva.',
    setupTitle: 'Preparazione e requisiti',
    setup: {
      id: 'setup',
      title: '',
      content:
        'Ogni partecipante seleziona segretamente esattamente 5 carte dalla propria collezione. Sono ammessi qualsiasi set, rarità e lingua, incluse versioni Foil, Secret Lair, Borderless, Retro Frame o Altered. Ogni lingua è permessa, ma si consiglia di scegliere carte che gli altri partecipanti sappiano leggere: altrimenti si rischia di ricevere voti bassi nella valutazione del Testo.',
      items: [
        'Giocatori: da 3 a 10. Si può giocare anche con più partecipanti, ma i tempi di votazione diventano molto lunghi',
        'La selezione: esattamente 5 carte a partecipante, scelte in segreto',
        'Materiali: penna e carta (o smartphone) per registrare i punteggi assegnati agli avversari',
      ],
    },
    phasesTitle: 'Fasi di giudizio',
    phases: [
      {
        id: 'phase1',
        number: 1,
        title: 'Fase 1: Passerella delle singole carte',
        description:
          'A turno, ogni giocatore diventa Curatore della propria mostra. Il Curatore presenta la prima carta al tavolo. I Giudici analizzano il pezzo e assegnano un punteggio da 0 a 10 su tre parametri. Si ripete per tutte e 5 le carte del Curatore in turno. Di seguito i 3 parametri sul quale basare la votazione.',
        criteria: [
          {
            id: 'art',
            name: 'Arte (0-10)',
            description:
              'La qualità dell\'illustrazione, lo stile artistico, l\'uso del colore e l\'impatto visivo del pezzo.',
          },
          {
            id: 'text',
            name: 'Testo (0-10)',
            description:
              'Il fascino del nome della carta, l\'evocatività del testo di flavor o la natura poetica delle abilità.',
          },
          {
            id: 'singleOriginality',
            name: 'Originalità singola (0-10)',
            description:
              'Quanto è unica, inaspettata e fuori dagli schemi questa scelta specifica? Premia la capacità di scovare gemme nascoste o classici dimenticati, invece di affidarsi ai cliché più comuni di Magic.',
          },
        ],
      },
      {
        id: 'phase2',
        number: 2,
        title: 'Fase 2: Valutazione dell\'ensemble',
        description:
          'Dopo aver presentato le carte singolarmente, il Curatore allinea tutte e 5 le carte sul tavolo, affiancate, rivelando la propria "mostra" nella sua interezza. Come in una mostra d\'arte, può spiegare brevemente il concetto dietro la selezione. Di seguito i 3 parametri sul quale basare la votazione dell\'ensamble:',
        criteria: [
          {
            id: 'visualCoherence',
            name: 'Coerenza visiva (0-10)',
            description:
              'Le carte stanno bene insieme? C\'è armonia nelle palette di colori, negli stili artistici, negli illustratori o nella scelta di bordi e frame?',
          },
          {
            id: 'thematicCoherence',
            name: 'Coerenza tematica / Lore (0-10)',
            description:
              'Le carte raccontano una storia, una progressione o un concetto logico? (es. le 5 fasi del dolore, una fazione di Dominaria, una tribù coordinata).',
          },
          {
            id: 'ensembleOriginality',
            name: 'Originalità ensemble (0-10)',
            description:
              'Quanto è brillante, intelligente o arguto il concetto che lega queste 5 carte? Premia i concetti più inventivi o astratti (es. «Cinque carte in cui compare un gatto da qualche parte nell\'illustrazione»).',
          },
        ],
      },
    ],
    scoringTitle: 'Determinazione del vincitore',
    scoring: {
      id: 'scoring',
      title: '',
      content:
        'Una volta completata la passerella di ogni giocatore, ogni partecipante calcola il punteggio finale come media dei voti ricevuti dagli altri partecipanti. Il punteggio massimo è 60 punti (50% sulle singole carte, 50% sul concetto d\'ensemble). Vince chi ottiene il punteggio più alto ed è incoronato campione della Carta d\'Oro.',
      items: [
        'Punteggio carte (Fase 1): somma di tutti i voti sulle singole carte ÷ 5 ÷ numero giudici → media carte (max 30)',
        'Punteggio ensemble (Fase 2): somma voti ensemble ÷ numero giudici → media ensemble (max 30)',
        'Punteggio finale = media carte + media ensemble (max 60)',
        'In caso di parità: vince chi ha il punteggio più alto in Originalità ensemble',
      ],
    },
    calculatorCta: 'Vai al calcolatore punteggi',
    sheetTitle: 'Foglio di votazione stampabile',
    sheetDescription:
      'Configurate il numero di giocatori, assegnate i nomi e scaricate il foglio PDF per registrare i voti con penna e carta.',
    playersLabel: 'Giocatori',
    playersCountHint:
      'Consigliato: 3–10 giocatori. Oltre i 10 il gioco resta valido, ma i tempi di votazione aumentano molto.',
    editPlayerNames: 'Modifica nomi giocatori',
    hidePlayerNames: 'Nascondi nomi giocatori',
    judgesLabel: 'Giudici',
  },
  calculator: {
    pageTitle: 'Calcolatore punteggi',
    pageLead:
      'Inserite i voti dei giudici per calcolare il punteggio finale. Max 60 punti (30 carte + 30 ensemble).',
    configTitle: 'Configurazione',
    playerCountLabel: 'Numero giocatori',
    playerCountHint:
      'Consigliato 3–10. Oltre i 10 giocatori i tempi di votazione aumentano molto.',
    judgesHint: 'Giudici per curatore: {{count}} (ogni giocatore non vota sé stesso)',
    curatorNameLabel: 'Nome curatore',
    phase1Title: 'Fase 1 — Passerella delle singole carte',
    phase2Title: 'Fase 2 — Valutazione dell\'ensemble',
    ensembleLabel: 'Ensemble',
    standingsTitle: 'Classifica',
    tieBreakNotice: 'Parità risolta con spareggio sull\'Originalità ensemble',
    votingTitle: 'Inserimento voti',
    selectCuratorLabel: 'Curatore da valutare',
    selectJudgeLabel: 'Giudice che vota',
    previousPair: '← Precedente',
    nextPair: 'Successivo →',
    editPlayerNames: 'Modifica nomi giocatori',
    hidePlayerNames: 'Nascondi nomi giocatori',
    revealResults: 'Mostra classifica finale',
    hideResults: 'Nascondi classifica',
    legendTitle: 'Legenda parametri di voto',
    legendIntro:
      'Ogni giudice assegna un punteggio da 0 a 10 per ogni parametro. Usate i pulsanti + e − per modificare il voto. 0 = assente o irrilevante, 10 = eccellente. Nessuno può votare sé stesso quando è Curatore.',
    cardParameterLabels: {
      art: 'Arte',
      text: 'Testo',
      singleOriginality: 'Originalità singola',
    },
    ensembleParameterLabels: {
      visualCoherence: 'Coerenza visiva',
      thematicCoherence: 'Coerenza tematica',
      ensembleOriginality: 'Originalità ensemble',
    },
  },
  scoreSheet: {
    printButton: 'Scarica foglio di votazione (PDF)',
    title: 'La Carta d\'Oro — Fogli di votazione',
    judgeSheetTitle: 'Foglio giudice',
    phase1Subtitle: 'Fase 1: Passerella delle singole carte (0-10 per parametro)',
    curatorLabel: 'Curatore',
    cardColumn: 'Carta',
    judgeColumn: 'Giudice',
    totalColumn: 'Totale',
    cardLabel: 'Carta',
    judgeLabel: 'Giudice',
    phase2Title: 'Fase 2: Ensemble (0-10 per parametro)',
    recapTitle: 'Riepilogo punteggi',
    recapSubtitle:
      'Usa questa pagina per sommare i voti di tutti i giudici e calcolare la classifica finale.',
    playerColumn: 'Giocatore',
    phase1SumColumn: 'Somma Fase 1',
    phase2SumColumn: 'Somma Fase 2',
    cardScoreColumn: 'Media carte (max 30)',
    ensembleScoreColumn: 'Media ensemble (max 30)',
    finalScoreColumn: 'Punteggio finale (max 60)',
    tieBreakNote:
      'Spareggio: vince il giocatore con la media più alta su Originalità ensemble.',
  },
  playerScore: {
    champion: 'Campione',
    avgCards: 'Media carte (max 30)',
    avgEnsemble: 'Media ensemble (max 30)',
    finalScore: 'Punteggio finale (max 60)',
    ensembleOriginality: 'Originalità ensemble',
  },
  common: {
    player: 'Giocatore',
    judge: 'Giudice',
    appName: 'La Carta d\'Oro',
    loading: 'Caricamento carte…',
  },
};
