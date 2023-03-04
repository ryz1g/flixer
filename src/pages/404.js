import styled from "styled-components";
import { colors } from "@/constants";

const Div404 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: ${colors.theme1};

  height: calc(100vh - 160px);
`;

const Divider = styled.div`
  width: 5px;
  height: 200px;
  background-color: ${colors.theme1};
`;

const InfoDiv = styled.div`
  font-size: 4rem;
  color: ${colors.hoverTileText};
`;

const Page404 = () => {
  return (
    <Div404>
      {"404"}
      <Divider />
      <InfoDiv>{"We can't find this page!"}</InfoDiv>
    </Div404>
  );
};

export default Page404;
