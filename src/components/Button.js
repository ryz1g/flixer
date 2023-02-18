import styled from "styled-components";
import { colors } from "@/constants";

const ButtonDiv = styled.span`
    background-color: ${colors.theme1};
    color: ${colors.buttonText};
    padding: 10px;
    font-size: 1.5rem;

    &:hover {
        background-color: ${colors.buttonHighlight};
        cursor: pointer;
    }
`; 

const Button = ({onClick, label}) => {
    return (
        <ButtonDiv onClick={() => onClick()}>
            {label}
        </ButtonDiv>
    );
};

export default Button;