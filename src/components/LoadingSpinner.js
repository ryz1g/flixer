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
    animation: ${spinAnimation} 1s ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
`;

const FullPageDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    font-size: 2rem;
    font-weight: 900;
    align-items: center;
    width:100%;
    background-color: black;
`;

const LoadingSpinner = ({children}) => {
    return (
        <FullPageDiv>
            {children}
            <Spinner />
        </FullPageDiv>
    );
}

export default LoadingSpinner;