import styled from "styled-components";
import MovieTile from "@/components/MovieTile";
import TrendingRequest from "@/requests/trendingRequest";
import { useState,useEffect } from "react";


const WelcomeHeader = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  padding: 5px;
  color: red;
`;

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 5px;
`;

const TestDiv = styled.div`
  background-color: white;
  color: red;
`;


export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    TrendingRequest(5).then(result => {
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
