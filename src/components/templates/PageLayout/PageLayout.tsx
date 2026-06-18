import styled from 'styled-components';
import { Header, Footer } from '../../organisms';
import type { BaseComponentProps } from '../../../types/base';

export interface PageLayoutProps extends BaseComponentProps {}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const Main = styled.main`
  flex: 1;
`;

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Layout>
  );
}
