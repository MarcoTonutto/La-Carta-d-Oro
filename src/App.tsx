import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { LanguageProvider } from './i18n/LanguageProvider';
import { PageLayout } from './components/templates';
import { HomePage, PlayPage, CalculatorPage } from './pages';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageProvider>
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
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
