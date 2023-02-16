import styled, { keyframes } from "styled-components";
import { colors } from "@/constants";

const ButtonHighlightAnimation = keyframes`
    0% {

    }
    100% {
        background-color: ${colors.buttonHighlight};
    }
`;

const ButtonDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.buttonText};
    background-color: black;
    padding: 10px;
    font-size: 1.5rem;

    &:hover {
        animation: ${ButtonHighlightAnimation} 0.2s;
        animation-fill-mode: forwards;
        cursor: pointer;
    }
`; 

const NavButton = ({onClick, label}) => {
    return (
        <ButtonDiv onClick={() => onClick()}>
            <div>{label}</div>
        </ButtonDiv>
    );
};

export default NavButton;