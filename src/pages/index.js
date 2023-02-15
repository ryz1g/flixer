import styled from "styled-components";
import MovieTile from "@/components/MovieTile";
import TrendingRequest from "@/requests/trendingRequest";
import { useState,useEffect } from "react";
import axios from "axios";
import api from "@/api";

const WelcomeHeader = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  padding: 5px;
  color: red;
`;

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 5px;
`;

const TestDiv = styled.div`
  background-color: white;
  color: red;
`;

const getTrendingMovies = async () => {
  const d = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api["api-key"]}&language=en-US&page=2`);
  const data = await d.data.results;
  return data;
};

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(result => {
      setMovieList(result);
    });
  },[]);

  return (
    <>
      <WelcomeHeader>Welcome to Flixer</WelcomeHeader>
      {movieList.length === 0 ? 
        <TestDiv>Loading.....</TestDiv> 
        :
        <TileGrid>
          {movieList.map(({id,poster_path,title}) => {
            return <MovieTile key={id} url={"https://image.tmdb.org/t/p/w300"+poster_path} title={title}/>
          })}
        </TileGrid>
      }
    </>
  )
}
