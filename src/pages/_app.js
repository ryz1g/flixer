import '../globals.css'
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PageBase = styled.div`
  background-color: black;
  height: 100%;
  color: white;
`;

export default function App({ Component, pageProps }) {
  return (
    <PageBase>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PageBase>
  );
}
