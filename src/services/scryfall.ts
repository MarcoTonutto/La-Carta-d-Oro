import type {
  ScryfallCard,
  ScryfallErrorResponse,
  ScryfallListResponse,
} from '../types/scryfall';

const VINTAGE_CARD_QUERY =
  'game:paper -is:digital -layout:art_series legal:vintage';

const SCRYFALL_SEARCH = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(
  VINTAGE_CARD_QUERY,
)}&unique=cards&order=random`;

const SCRYFALL_RANDOM = `https://api.scryfall.com/cards/random?q=${encodeURIComponent(
  VINTAGE_CARD_QUERY,
)}`;

function isScryfallError(data: unknown): data is ScryfallErrorResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'object' in data &&
    (data as ScryfallErrorResponse).object === 'error'
  );
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getCardImageUri(card: ScryfallCard): string | null {
  if (card.image_uris?.normal) {
    return card.image_uris.normal;
  }

  const firstFace = card.card_faces?.[0]?.image_uris;
  if (firstFace?.normal) {
    return firstFace.normal;
  }

  return card.image_uris?.large ?? firstFace?.large ?? null;
}

async function fetchSingleRandomCard(): Promise<ScryfallCard | null> {
  const response = await fetch(SCRYFALL_RANDOM);
  if (!response.ok) {
    return null;
  }

  const card = (await response.json()) as ScryfallCard | ScryfallErrorResponse;
  if (isScryfallError(card)) {
    return null;
  }

  return getCardImageUri(card) ? card : null;
}

async function fetchRandomCardBatch(count: number): Promise<ScryfallCard[]> {
  const response = await fetch(SCRYFALL_SEARCH);
  if (!response.ok) {
    return [];
  }

  const payload = (await response.json()) as ScryfallListResponse | ScryfallErrorResponse;
  if (isScryfallError(payload)) {
    return [];
  }

  return shuffle(payload.data)
    .filter((card) => getCardImageUri(card))
    .slice(0, count);
}

export async function fetchRandomCards(count: number): Promise<ScryfallCard[]> {
  const fromSearch = await fetchRandomCardBatch(count);
  if (fromSearch.length >= count) {
    return fromSearch;
  }

  const cards = [...fromSearch];
  const missing = count - cards.length;

  const singles = await Promise.all(
    Array.from({ length: missing }, () => fetchSingleRandomCard()),
  );

  singles.forEach((card) => {
    if (card && !cards.some((existing) => existing.id === card.id)) {
      cards.push(card);
    }
  });

  return cards.slice(0, count);
}
