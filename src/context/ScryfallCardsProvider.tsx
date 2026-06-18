import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { ScryfallCard } from '../types/scryfall';
import { fetchRandomCards } from '../services/scryfall';

export const SCRYFALL_CARD_COUNT = 5;

export type ScryfallCardsStatus = 'loading' | 'ready' | 'error';

interface ScryfallCardsContextValue {
  cards: ScryfallCard[];
  status: ScryfallCardsStatus;
}

const ScryfallCardsContext = createContext<ScryfallCardsContextValue | null>(null);

export function ScryfallCardsProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<ScryfallCard[]>([]);
  const [status, setStatus] = useState<ScryfallCardsStatus>('loading');

  useEffect(() => {
    let cancelled = false;

    const loadCards = async () => {
      try {
        const result = await fetchRandomCards(SCRYFALL_CARD_COUNT);

        if (cancelled) {
          return;
        }

        if (result.length === 0) {
          setStatus('error');
          return;
        }

        setCards(result);
        setStatus('ready');
      } catch {
        if (!cancelled) {
          setStatus('error');
        }
      }
    };

    loadCards();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => ({ cards, status }), [cards, status]);

  return (
    <ScryfallCardsContext.Provider value={value}>{children}</ScryfallCardsContext.Provider>
  );
}

export function useScryfallCards(): ScryfallCardsContextValue {
  const context = useContext(ScryfallCardsContext);

  if (!context) {
    throw new Error('useScryfallCards must be used within ScryfallCardsProvider');
  }

  return context;
}
