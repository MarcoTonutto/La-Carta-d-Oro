export const theme = {
  colors: {
    forest: '#0c2307',
    gold: '#c29b51',
    burgundyRed: '#4f0c0c',
    silver: '#d1d1d1',
    gray: '#7b7b7b',

    black: '#0c2307',
    goldLight: '#d4b06a',
    goldDark: '#9a7838',
    ivory: '#d1d1d1',
    burgundy: '#4f0c0c',
    surface: '#152e10',
    surfaceLight: '#1e3a16',
    textMuted: '#7b7b7b',
    white: '#FFFFFF',
  },
  rgba: {
    gold03: 'rgba(194, 155, 81, 0.03)',
    gold05: 'rgba(194, 155, 81, 0.05)',
    gold08: 'rgba(194, 155, 81, 0.08)',
    gold10: 'rgba(194, 155, 81, 0.1)',
    gold12: 'rgba(194, 155, 81, 0.12)',
    gold15: 'rgba(194, 155, 81, 0.15)',
    gold20: 'rgba(194, 155, 81, 0.2)',
    gold25: 'rgba(194, 155, 81, 0.25)',
    gold30: 'rgba(194, 155, 81, 0.3)',
    gold35: 'rgba(194, 155, 81, 0.35)',
    gold40: 'rgba(194, 155, 81, 0.4)',
    gold50: 'rgba(194, 155, 81, 0.5)',
    burgundy35: 'rgba(79, 12, 12, 0.35)',
    silver15: 'rgba(209, 209, 209, 0.15)',
    surfaceGlass: 'rgba(21, 46, 16, 0.85)',
    headerBg: 'rgba(12, 35, 7, 0.92)',
    blackOverlay: 'rgba(0, 0, 0, 0.2)',
  },
  fonts: {
    serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
    sans: "'Inter', system-ui, -apple-system, sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.75rem',
    '4xl': '3.5rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    card: '0 4px 24px rgba(0, 0, 0, 0.35)',
    glow: '0 0 20px rgba(194, 155, 81, 0.2)',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
  },
} as const;

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
