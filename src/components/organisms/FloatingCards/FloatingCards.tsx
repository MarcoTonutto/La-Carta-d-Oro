import styled, { keyframes } from 'styled-components';
import { getCardImageUri } from '../../../services/scryfall';
import type { ScryfallCard } from '../../../types/scryfall';
import { useScryfallCards } from '../../../context/ScryfallCardsProvider';

type CardLayout = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate: number;
  delay: number;
  duration: number;
};

const CARD_LAYOUT: CardLayout[] = [
  { top: '8%', left: '4%', rotate: -18, delay: 0, duration: 9 },
  { top: '14%', right: '6%', rotate: 14, delay: 1.2, duration: 10 },
  { top: '42%', left: '2%', rotate: -8, delay: 0.6, duration: 11 },
  { bottom: '12%', right: '10%', rotate: 16, delay: 0.3, duration: 8.5 },
  { bottom: '10%', left: '12%', rotate: -12, delay: 2.4, duration: 10.5 },
];

const float = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(var(--rotate));
  }
  50% {
    transform: translate3d(0, -14px, 0) rotate(calc(var(--rotate) + 3deg));
  }
`;

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(var(--rotate));
  }
  50% {
    transform: translate3d(10px, -10px, 0) rotate(calc(var(--rotate) - 2deg));
  }
`;

const cardEnter = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 24px, 0) rotate(var(--rotate)) scale(0.92);
  }
  to {
    opacity: 0.72;
    transform: translate3d(0, 0, 0) rotate(var(--rotate)) scale(1);
  }
`;

const cardEnterMobile = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 24px, 0) rotate(var(--rotate)) scale(0.92);
  }
  to {
    opacity: 0.5;
    transform: translate3d(0, 0, 0) rotate(var(--rotate)) scale(1);
  }
`;

const Showcase = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const CardFrame = styled.div<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $rotate: number;
  $delay: number;
  $duration: number;
  $index: number;
}>`
  --rotate: ${({ $rotate }) => $rotate}deg;
  position: absolute;
  top: ${({ $top }) => $top ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  right: ${({ $right }) => $right ?? 'auto'};
  bottom: ${({ $bottom }) => $bottom ?? 'auto'};
  width: clamp(88px, 14vw, 148px);
  aspect-ratio: 5 / 7;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  opacity: 0;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.45),
    0 0 0 1px ${({ theme }) => theme.rgba.gold25};
  animation:
    ${float} ${({ $duration }) => $duration}s ease-in-out infinite,
    ${cardEnter} 0.8s ease forwards;
  animation-delay: ${({ $delay }) => $delay}s, ${({ $index }) => $index * 0.12}s;
  transform: rotate(var(--rotate));

  &:nth-child(odd) {
    animation-name: ${drift}, ${cardEnter};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: clamp(72px, 22vw, 108px);
    animation-name: ${drift}, ${cardEnterMobile};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: ${cardEnter} 0.8s ease forwards;
    animation-delay: ${({ $index }) => $index * 0.12}s;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 20%,
    ${({ theme }) => theme.rgba.headerBg} 78%
  );
  pointer-events: none;
`;

function renderCards(cards: ScryfallCard[]) {
  return cards.map((card, index) => {
    const imageUri = getCardImageUri(card);
    const layout = CARD_LAYOUT[index % CARD_LAYOUT.length];

    if (!imageUri) {
      return null;
    }

    return (
      <CardFrame
        key={card.id}
        $top={layout.top}
        $left={layout.left}
        $right={layout.right}
        $bottom={layout.bottom}
        $rotate={layout.rotate}
        $delay={layout.delay}
        $duration={layout.duration}
        $index={index}
      >
        <CardImage src={imageUri} alt="" loading="lazy" decoding="async" />
      </CardFrame>
    );
  });
}

export function FloatingCards() {
  const { cards, status } = useScryfallCards();

  if (status !== 'ready' || cards.length === 0) {
    return null;
  }

  return (
    <Showcase aria-hidden>
      {renderCards(cards)}
      <Vignette />
    </Showcase>
  );
}
