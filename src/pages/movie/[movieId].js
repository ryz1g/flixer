import { useRouter } from "next/router";
import Image from "next/image";
import { getMovieDetails,getCredits } from "@/requests";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState,useEffect } from "react";
import styled from "styled-components";
import { colors } from "@/constants";

const FullPage = styled.div`
    position: relative;
`;

const BackdropWrapperWrapper = styled.div`
    position: relative;
    width: 100vw;
    max-height: 555px;
    overflow: hidden;
`;

const BackdropOverlay = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1));
`;

const BackdropWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: calc(100vw / 1.8);
`;

const Tagline = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    padding: 70px 10px 0px 10px;
    text-align: center;
    font-size: 3rem;
    font-style: italic;
    font-weight: 900;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const PosterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 90vw;
    padding-left: 5%;
    top: -25vw;
    /* left: 5%; */
`;

const MovieDetails = styled.div`
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0));
    padding: 20px;
    border-radius: 0px 50px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: calc(100% - 300px);

    p {
        font-size: 1.3rem;
        text-justify: inter-word;
        line-height: 1.8rem;
    }
`;

const Ratings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

const RatingDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    color: ${colors.ratings};
    padding-right: 5px;
`;

const InfoDiv = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.theme1};
`;

const MoneyDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    color: green;
`;

const IMDBLink = styled.a`
    &:hover {
        cursor: pointer;
    }
`;

const CreditTrack = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 10px;
        overflow: scroll;
    `;

const CreditItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: fit-content;
`;

const MoviePage = () => {
    const router = useRouter();
    const movieId = router.query.movieId;
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCredits, setMovieCredits] = useState({});

    useEffect(() => {
        getMovieDetails(movieId)
        .then((result) => {
            setMovieDetails(result);
        })

        getCredits(movieId)
        .then((result) => {
            setMovieCredits(result);
        })
    },[]);

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

    const Credits = () => {
        if(Object.keys(movieCredits).length !== 0)
            return (
                <CreditTrack>
                    {movieCredits.cast.map(({character,name,profile_path}) => {
                        return (
                            <CreditItem key={profile_path}>
                                    <Image src={`https://image.tmdb.org/t/p/w200`+profile_path} alt={name} width="90" height="135"/>
                                    <InfoDiv>{character}</InfoDiv>
                                    {name}
                            </CreditItem>
                        );
                    })}
                </CreditTrack>
            );
        else return null;
    };

    return (
        <div>
            {
                Object.keys(movieDetails).length === 0 ? <LoadingSpinner /> 
                :
                <FullPage>
                    <BackdropWrapperWrapper>
                        <Tagline> {`"${movieDetails.tagline}"`} </Tagline>
                        <BackdropWrapper>
                            <Image src={"https://image.tmdb.org/t/p/original"+movieDetails.backdrop_path} alt="Backdrop" fill/>
                        </BackdropWrapper>
                        <BackdropOverlay />
                    </BackdropWrapperWrapper>
                    <PosterWrapper>
                        <Image src={"https://image.tmdb.org/t/p/w500"+movieDetails.poster_path} alt="Poster" width="300" height="450"/>
                        <MovieDetails>
                            <p>{movieDetails.overview}</p>
                            <InfoDiv>
                                {movieDetails.release_date+" |"}
                                {movieDetails.genres.map(({name},index) => {
                                    return <span key={name}>{`${name}${index !== movieDetails.genres.length-1 ? "," : ""}`}</span>
                                })}
                            </InfoDiv>
                            <Credits />
                            <MoneyDiv>
                                <span>{`Revenue : $${movieDetails.revenue}`}</span>
                                <span>{`Budget : $${movieDetails.budget}`}</span>
                                {/* {movieDetails.production_companies.map(({name, logo_path}) => {
                                    return <Image key={logo_path} src={"https://image.tmdb.org/t/p/w300"+logo_path} alt={name} height="30" width="60" />
                                })} */}
                            </MoneyDiv>
                            <Ratings>
                                <span>{`${movieDetails.runtime} mins`}</span>
                                <RatingDiv>
                                    <span>{getStarString(movieDetails.vote_average/2)}</span>
                                    <span>{Math.floor(movieDetails.vote_average*100)/100+"/10 "}</span>
                                    <span>{`(${movieDetails.vote_count} votes)`}</span>
                                </RatingDiv>
                                <IMDBLink href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`} target="_blank">
                                    <Image src="/imdb_logo.png" alt="IMDB logo" width="30" height="30"/>
                                </IMDBLink>
                            </Ratings>
                        </MovieDetails>
                    </PosterWrapper>
                </FullPage>
            }
        </div>
    );
}

export default MoviePage;