import styled from "styled-components";

const ButtonDiv = styled.span`
    background-color: red;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;

    &:hover {
        background-color: green;
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