import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";

const Tile = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    width: 200px;
    color: ${colors.hoverTileText};
    border-radius: 25px 10px 10px 10px;
    overflow: hidden;
    // gap: 10px;

    &:hover {
        cursor: pointer;
        box-shadow: -5px -5px 8px ${colors.hoverTileBase};
    }
`;

const Overlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    width: 200px;
    height: 300px;
    text-align: justify;
    background-color: rgba(0,0,0,0.7);
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
    font-size: 1.2rem;
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
        <Tile   onMouseEnter={() => setOverlay(!overlay)} 
                onMouseLeave={() => setOverlay(!overlay)}
                onClick={() => handleClick(id)}>
            <Image src={url} alt="Not Available!" width="200" height="300"/>
            {overlay ? 
                <Overlay>
                    <RatingDiv>{vote_average}</RatingDiv>
                    <RatingDiv>{getStarString(vote_average/2)+` (${vote_count})`}</RatingDiv>
                    <GenreDiv>
                        {genres.map((genre) => <span key={genre}>{genre}</span>)}
                    </GenreDiv>
                </Overlay> 
            : null}
            <Title>{title}</ Title>
        </Tile>
    );
}

export default MovieTile;