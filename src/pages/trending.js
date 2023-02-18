import styled from "styled-components";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getTrendingMovies } from "@/requests";
import { useState,useEffect } from "react";
import { colors } from "@/constants";

const WelcomeHeader = styled.div`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding: 5px;
  color: ${colors.theme1};
`;

const ButtonRibbon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [trendingTime, setTrendingTime] = useState("day");

  useEffect(() => {
    getTrendingMovies(trendingTime)
    .then(result => {
      setMovieList(result);
      // console.log(result);
    });
  },[trendingTime]);

  return (
    <>
      {movieList.length === 0 ? 
        <LoadingSpinner />
        :
        <>
          <WelcomeHeader>{`Trending ${trendingTime === 'day' ? "Today" : "This Week"}`}</WelcomeHeader>
          <ButtonRibbon>
            <Button onClick={() => trendingTime!== "day" ? setTrendingTime("day") : null} label="Today"/>
            <Button onClick={() => trendingTime!== "week" ? setTrendingTime("week") : null} label="This Week"/>
          </ButtonRibbon>
          <Grid movieList={movieList}/>
        </>
      }
    </>
  )
}
