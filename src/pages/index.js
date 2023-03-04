import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from "@/constants";
import { useRef } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";

const FullPageDiv = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const WelcomeMessage = styled.div`
  font-size: 2rem;
`;

const SearchBarFocusAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 30px ${colors.theme1light};
    border: none;
  }
  100% {
    box-shadow: 0px 0px 30px ${colors.theme1Highlight};
    border: 2px solid ${colors.theme1};
  }
`;

const SearchBarGrow = keyframes`
  0% {

  }
  100% {
    transform: scale(1.05);
    box-shadow: 0px 0px 30px ${colors.theme1};
  }
`;

const CheckBox = styled.input`
  type: checkbox;
`;

const SearchBar = styled.input`
  width: 60%;
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 10px 25px 10px 25px;
  border-radius: 40px;
  outline: none;
  box-shadow: 0px 0px 30px ${colors.theme1light};
  border: none;
  background-color: ${colors.pureBlack};
  color: white;

  &:hover {
    animation: ${SearchBarGrow} 0.1s ease-in-out;
    animation-fill-mode: forwards;
  }

  &:focus {
    animation: ${SearchBarFocusAnimation} 0.1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  var searchBarRef = useRef(null);
  var checkBoxRef = useRef(null);
  const router = useRouter();
  return (
    <FullPageDiv>
      <WelcomeMessage> Search on Flixer </WelcomeMessage>
      <SearchBar ref={searchBarRef} />
      <OptionsWrapper>
        <span> Include Adult Titles</span>
        <input type="checkbox" ref={checkBoxRef} />
        <Button
          label={"Search"}
          onClick={() => {
            // console.log(checkBoxRef.current.checked);
            if (searchBarRef.current.value === "") return;
            router.push({
              pathname: `/search/`,
              query: {
                queryString: searchBarRef.current.value,
                pageNum: 1,
                adultTitles: checkBoxRef.current.checked,
              },
            });
          }}
        />
      </OptionsWrapper>
    </FullPageDiv>
  );
};

export default HomePage;
