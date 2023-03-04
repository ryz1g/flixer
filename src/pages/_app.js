import "../globals.css";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PageBase = styled.div`
  display: flex;
  flex-flow: column;
  background-color: black;
  height: max(100%, 100vh);
  height: max(100vh, 100%);
  min-height: 100%;
  color: white;
`;

const EmptyFill = styled.div`
  background-color: black;
  flex: 1 1 auto;
`;

export default function App({ Component, pageProps }) {
  return (
    <PageBase>
      <Header />
      <EmptyFill />
      <Component {...pageProps} />
      <EmptyFill />
      <Footer />
    </PageBase>
  );
}
