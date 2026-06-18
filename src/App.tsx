import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { LanguageProvider } from './i18n/LanguageProvider';
import { ScryfallCardsProvider, useScryfallCards } from './context/ScryfallCardsProvider';
import { PageLayout } from './components/templates';
import { AppLoader } from './components/organisms';
import { HomePage, PlayPage, CalculatorPage } from './pages';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

function AppRoutes() {
  const { status } = useScryfallCards();

  if (status === 'loading') {
    return <AppLoader />;
  }

  return (
    <BrowserRouter basename={basename}>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regolamento" element={<Navigate to="/gioca" replace />} />
          <Route path="/gioca" element={<PlayPage />} />
          <Route path="/calcolatore" element={<CalculatorPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageProvider>
        <ScryfallCardsProvider>
          <AppRoutes />
        </ScryfallCardsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
