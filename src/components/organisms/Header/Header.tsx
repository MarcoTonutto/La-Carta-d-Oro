import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Heading, LanguageSwitch } from '../../atoms';
import { useTranslation } from '../../../hooks/useTranslation';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.rgba.headerBg};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.rgba.gold20};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const LogoLink = styled(NavLink)`
  text-decoration: none;
  flex-shrink: 0;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  letter-spacing: 0.03em;
  transition: color ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export function Header() {
  const { t, language, setLanguage } = useTranslation();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/gioca', label: t.nav.play },
    { to: '/calcolatore', label: t.nav.calculator },
  ];

  return (
    <StyledHeader>
      <Inner>
        <LogoLink to="/">
          <Heading level={4} variant="gold">
            La Carta d&apos;Oro
          </Heading>
        </LogoLink>
        <NavGroup>
          <Nav>
            {links.map((link) => (
              <StyledNavLink key={link.to} to={link.to}>
                {link.label}
              </StyledNavLink>
            ))}
          </Nav>
          <LanguageSwitch language={language} onChange={setLanguage} />
        </NavGroup>
      </Inner>
    </StyledHeader>
  );
}
