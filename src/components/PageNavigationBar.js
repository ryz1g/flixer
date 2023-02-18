import Button from "./Button";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/constants";
import { keyframes } from "styled-components";

const growAnimation = keyframes`
    0% {

    }
    100% {
        transform: scale(1.2);
    }
`;

const NavCircleDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${({selected}) => selected ? "40px" : "20px"};
    width: ${({selected}) => selected ? "40px" : "20px"};
    border-radius: 40px;
    background-color: ${colors.theme1};
    box-shadow: ${({selected}) => selected ? `0px 0px 30px ${colors.theme1}` : "none"};
    font-size: ${({selected}) => selected ? "1.5rem" : "0.8rem"};
    
    &:hover {
        cursor: pointer;
        animation: ${growAnimation} 0.1s ease-in-out;
        animation-fill-mode: forwards;
    }
`;

const NavCircle = ({selected, label, onClick}) => {
    return (
        <NavCircleDiv selected={selected} onClick={()=>onClick()}> {label} </NavCircleDiv>
    );
};

const PageNavigationBar = ({baseUrl,currentPage}) => {
    const NavCirclesList = [-4,-3,-2,-1,0,1,2,3,4];
    const router = useRouter();

    return (
        <>
            <Button onClick={() => router.push(baseUrl+Math.max(1,currentPage-1))} label="Prev"/>
            {
                NavCirclesList.map((index) => {
                const calcPage = index + (currentPage>4 ? currentPage : 5);
                return <NavCircle 
                            key={calcPage} label={calcPage} selected={currentPage===calcPage}
                            onClick={() => router.push(baseUrl+calcPage)} />
                })
            }
            <Button onClick={() => router.push(baseUrl+Math.min(1000,currentPage+1))} label="Next"/>
        </>
    );
}

export default PageNavigationBar;