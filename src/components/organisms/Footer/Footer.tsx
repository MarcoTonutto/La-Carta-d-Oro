import styled from 'styled-components';
import { Text } from '../../atoms';
import { useTranslation } from '../../../hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Text variant="small" align="center">
        {t.footer.tagline}
      </Text>
      <Text variant="small" align="center">
        {t.footer.disclaimer}
      </Text>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.rgba.gold15};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
