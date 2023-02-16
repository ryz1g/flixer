import styled from "styled-components";
import { useRouter } from "next/router";
import { colors } from "@/constants";
import NavButton from "./NavButton";
import NavSearchBar from "./NavSearchBar";

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
`;

const Header = () => {
    const router = useRouter();
    return (
        <NavBar>
            <Flixer onClick={() => router.push("/")}>FLIXER</Flixer>
            <NavButton label={"Trending"} onClick={() => router.push("/trending")} />
            <NavButton label={"Popular"} onClick={() => router.push("/popular/1")}/>
            <NavButton label={"Discover"}/>
            <NavButton label={"Top Rated"} onClick={() => router.push("/topRated/1")}/>
            {/* <NavSearchBar /> */}
        </NavBar>
    );
}

export default Header;