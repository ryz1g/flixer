import styled from "styled-components";
import { colors } from "@/constants";

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
    }
`;

const NavCircle = ({selected, label, onClick}) => {
    return (
        <NavCircleDiv selected={selected} onClick={()=>onClick()}> {label} </NavCircleDiv>
    );
};

export default NavCircle;

