import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { colors } from "@/constants";
import { useState } from "react";
import NavSearchBar from "./NavSearchBar";

const ButtonHighlightAnimation = keyframes`
    0% {

    }
    100% {
        background-color: ${colors.buttonHighlight};
    }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.buttonText};
  background-color: black;
  padding: 10px;
  font-size: 1.5rem;
  ${({ selected }) =>
    selected &&
    `
        box-shadow: 0px 5px 0px ${colors.theme1};
    `}

  &:hover {
    animation: ${ButtonHighlightAnimation} 0.2s;
    animation-fill-mode: forwards;
    cursor: pointer;
  }
`;

const NavButton = ({ onClick, label, selected }) => {
  return (
    <ButtonDiv selected={selected} onClick={() => onClick()}>
      <div>{label}</div>
    </ButtonDiv>
  );
};

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.theme1};
  padding-left: 10px;
`;

const Flixer = styled.span`
  font-size: 4rem;
  font-weight: 900;
  cursor: pointer;
  color: ${colors.pureBlack};
  padding-right: 10px;
`;

const Header = () => {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState(0);

  const handleClick = (id, url = "/") => {
    // if(selectedButton === id) return;
    router.push(url);
    setSelectedButton(id);
  };

  return (
    <NavBar>
      <Flixer onClick={() => handleClick(0, "/")}>FLIXER</Flixer>
      <NavButton
        selected={selectedButton === 1}
        label={"Trending"}
        onClick={() => handleClick(1, "/trending")}
      />
      <NavButton
        selected={selectedButton === 2}
        label={"Popular"}
        onClick={() => handleClick(2, "/popular/1")}
      />
      <NavButton
        selected={selectedButton === 3}
        label={"Discover"}
        onClick={() => {
          handleClick(3);
        }}
      />
      <NavButton
        selected={selectedButton === 4}
        label={"Top Rated"}
        onClick={() => handleClick(4, "/topRated/1")}
      />
      {/* <NavSearchBar /> */}
    </NavBar>
  );
};

export default Header;
