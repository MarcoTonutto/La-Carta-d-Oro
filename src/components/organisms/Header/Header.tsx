import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
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
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

const LogoLink = styled(NavLink)`
  text-decoration: none;
  flex-shrink: 1;
  min-width: 0;
`;

const DesktopNavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
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
`;

const MobileNavLink = styled(StyledNavLink)`
  display: block;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.5rem;
  height: 2.5rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.rgba.gold35};
  border-radius: ${({ theme }) => theme.radii.sm};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MenuBar = styled.span<{ $open: boolean }>`
  display: block;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 1px;
  transition: transform ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast};

  &:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'translateY(7px) rotate(45deg)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'translateY(-7px) rotate(-45deg)' : 'none')};
  }
`;

const MobilePanel = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.lg}`};
    border-top: 1px solid ${({ theme }) => theme.rgba.gold20};
    background: ${({ theme }) => theme.rgba.headerBg};
  }
`;

const MobilePanelFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.rgba.gold15};
`;

export function Header() {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/gioca', label: t.nav.play },
    { to: '/calcolatore', label: t.nav.calculator },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <StyledHeader>
      <Inner>
        <LogoLink to="/">
          <Heading level={4} variant="gold">
            La Carta d&apos;Oro
          </Heading>
        </LogoLink>

        <DesktopNavGroup>
          <Nav aria-label="Main navigation">
            {links.map((link) => (
              <StyledNavLink key={link.to} to={link.to}>
                {link.label}
              </StyledNavLink>
            ))}
          </Nav>
          <LanguageSwitch language={language} onChange={setLanguage} />
        </DesktopNavGroup>

        <MenuButton
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuBar $open={menuOpen} />
          <MenuBar $open={menuOpen} />
          <MenuBar $open={menuOpen} />
        </MenuButton>
      </Inner>

      <MobilePanel id="mobile-nav" $open={menuOpen}>
        <Nav aria-label="Main navigation">
          {links.map((link) => (
            <MobileNavLink key={link.to} to={link.to}>
              {link.label}
            </MobileNavLink>
          ))}
        </Nav>
        <MobilePanelFooter>
          <LanguageSwitch language={language} onChange={setLanguage} />
        </MobilePanelFooter>
      </MobilePanel>
    </StyledHeader>
  );
}
