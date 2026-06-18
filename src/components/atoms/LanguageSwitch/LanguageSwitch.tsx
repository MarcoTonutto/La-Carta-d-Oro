import styled from 'styled-components';
import type { Language } from '../../../types/i18n';

export interface LanguageSwitchProps {
  language: Language;
  onChange: (lang: Language) => void;
}

const Switch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.rgba.gold35};
  border-radius: ${({ theme }) => theme.radii.sm};
  overflow: hidden;
`;

const LangButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.black : theme.colors.textMuted};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.goldDark}, ${theme.colors.gold})`
      : 'transparent'};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.black : theme.colors.gold};
  }
`;

export function LanguageSwitch({ language, onChange }: LanguageSwitchProps) {
  return (
    <Switch role="group" aria-label="Language switch">
      <LangButton
        type="button"
        $active={language === 'it'}
        onClick={() => onChange('it')}
        aria-pressed={language === 'it'}
      >
        IT
      </LangButton>
      <LangButton
        type="button"
        $active={language === 'en'}
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </LangButton>
    </Switch>
  );
}
