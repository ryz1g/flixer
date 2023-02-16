import styled from "styled-components";
import { keyframes } from "styled-components";
import { colors } from '@/constants';

const spinAnimation = keyframes`
    0% {

    }
    100% {
        transform: rotateZ(360deg);
    }
`;

const Spinner = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${colors.theme1};
    animation: ${spinAnimation} 2s;
    animation-iteration-count: infinite;
`;

const FullPageDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: black;
`;

const LoadingSpinner = () => {
    return (
        <FullPageDiv>
            <Spinner />
        </FullPageDiv>
    );
}

export default LoadingSpinner;