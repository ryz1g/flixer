import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";

const WrapperTile = styled.div`
    position: relative;
    width: 200px;
    /* height: ${({overlay}) => overlay ? "400px" : "350px"}; */
    height: 400px;
`;

const TileGrowAnimation = keyframes`
    0% {

    }
    100% {
        transform: scale(1.08);
    }
`;

const Tile = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    /* width: ${({overlay}) => overlay ? "250px" : "200px"}; */
    color: ${colors.hoverTileText};
    border-radius: 25px 5px 25px 25px;
    overflow: hidden;
    // gap: 10px;

    &:hover {
        cursor: pointer;
        top: -40px;
        left: -25px;
        z-index: 20;
        box-shadow: 0px 0px 50px ${colors.theme1Highlight};
        animation: ${TileGrowAnimation} 0.15s ease-in-out;
        animation-fill-mode: backwards;
    }
`;

const Overlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    width: ${({overlay}) => overlay ? "250px" : "200px"};
    height: ${({overlay}) => overlay ? "375px" : "300px"};
    text-align: justify;
    background-image: linear-gradient( rgba(0,0,0,0.9), rgba(0,0,0,0.5));
    overflow: hidden;
`;

const RatingDiv = styled.div`
    font-size: 1.5rem;
    color: ${colors.ratings};
`;

const GenreDiv = styled.span`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 10px;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 800;
    padding: 10px
`;

function MovieTile({id, url, title, overview, vote_average, vote_count, genres}) {
    const [overlay, setOverlay] = useState(false);
    const getStarString = (rating) => {
        var st="";
        var total=5;
        while(rating > 1) {
            st+="★";
            rating--;
            total--;
        }
        if(rating >= 0.5) {
            st+="★";total--;
        }
        while(total!=0) {
            st+="☆";
            total--;
        }
        return st;
    };

    const router = useRouter();
    const handleClick = (id) => {
        router.push(`/movie/${id}`);
    }

    return (
        <WrapperTile overlay={overlay}>
            <Tile   onMouseEnter={() => setOverlay(!overlay)} 
                    onMouseLeave={() => setOverlay(!overlay)}
                    onClick={() => handleClick(id)}
                    overlay={overlay}>
                <Image src={url} alt="Not Available!" width={overlay ? "250" : "200"} height={overlay ? "375" : "300"}/>
                {overlay ? 
                    <Overlay overlay={overlay}>
                        <RatingDiv>{vote_average+"/10"}</RatingDiv>
                        <RatingDiv>{getStarString(vote_average/2)+` (${vote_count})`}</RatingDiv>
                        <GenreDiv>
                            {genres.map((genre) => <span key={genre}>{genre}</span>)}
                        </GenreDiv>
                    </Overlay> 
                : null}
                <Title>{title}</ Title>
            </Tile>
        </WrapperTile>
    );
}

export default MovieTile;