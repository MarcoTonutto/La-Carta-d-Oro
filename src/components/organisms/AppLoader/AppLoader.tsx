import styled, { keyframes } from 'styled-components';
import { Heading, Text } from '../../atoms';
import { useTranslation } from '../../../hooks/useTranslation';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.45;
  }
  50% {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.forest};
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.rgba.gold25};
  border-top-color: ${({ theme }) => theme.colors.gold};
  animation: ${spin} 0.9s linear infinite;
`;

const LoadingText = styled(Text)`
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

export function AppLoader() {
  const { t } = useTranslation();

  return (
    <Overlay role="status" aria-live="polite" aria-busy="true">
      <Spinner aria-hidden />
      <Heading level={3} variant="gold">
        {t.common.appName}
      </Heading>
      <LoadingText variant="muted" align="center">
        {t.common.loading}
      </LoadingText>
    </Overlay>
  );
}
