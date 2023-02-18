import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";

const WrapperRibbon = styled.div`
    position: relative;
    width: 100%;
    height: 90px;
`;

const RibbonGrowAnimation = keyframes`
    0% {

    }
    100% {
        transform: scale(1.08);
    }
`;

const Ribbon = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width:100%;
    height:100%;
    justify-content: space-between;
    color: ${colors.hoverTileText};
    border-radius: 25px 5px 25px 25px;
    overflow: hidden;
    gap: 10px;
    padding: 0px 10px 0px 10px;

    &:hover {
        cursor: pointer;
        z-index: 20;
        box-shadow: 0px 0px 50px ${colors.theme1Highlight};
        animation: ${RibbonGrowAnimation} 0.15s ease-in-out;
        animation-fill-mode: backwards;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 800;
    padding: 10px
`;

const GenreDiv = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.theme1};
    gap: 5px;
`;

const MainContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

const RatingDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    color: ${colors.ratings};
`;

function MovieRibbon({id, rank, currentPage, url, title, vote_average, vote_count, genres}) {
    const router = useRouter();
    const handleClick = (id) => {
        router.push(`/movie/${id}`);
    }

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

    return (
        <WrapperRibbon>
            <Ribbon onClick={() => handleClick(id)}>
                <MainContentDiv>
                    <Title>{(currentPage-1)*20+rank}</Title>
                    <Image src={url} alt="Not Available!" width="60" height="90" />
                    <Title>{title}</ Title>
                    <GenreDiv>
                        {"("}
                        {genres.map((genre,index) => {
                            return <span key={genre}>{`${genre}${index !== genres.length-1 ? " | " : ""}`}</span>
                        })}
                        {")"}
                    </GenreDiv>
                </MainContentDiv>
                <RatingDiv>
                    {vote_average+" / 10"}
                    {getStarString(vote_average/2)+` (${vote_count})`}
                </RatingDiv>
            </Ribbon>
        </WrapperRibbon>
    );
}

export default MovieRibbon;