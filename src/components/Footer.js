import styled from "styled-components";
import Image from "next/image";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <>Powered By </>
      <Image src="/tmdb.svg" alt="TMDB Logo" width={80} height={40} />
      <>API </>
    </FooterDiv>
  );
};

export default Footer;
