import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const goldBorder = css`
  border: 1px solid ${({ theme }) => theme.colors.gold};
`;

export const sectionPadding = css`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }
`;

export const glassCard = css`
  background: ${({ theme }) => theme.rgba.surfaceGlass};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.rgba.gold25};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const goldGradientText = css`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.goldLight},
    ${({ theme }) => theme.colors.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
