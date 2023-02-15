import styled from "styled-components";
import MovieTile from "@/components/MovieTile";
import Button from "@/components/Button";
import TrendingRequest from "@/requests/trendingRequest";
import { useState,useEffect } from "react";

const WelcomeHeader = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  padding: 5px;
  color: red;
`;

const DisplayGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 30px;
`;

const TileGrid = styled.div`
  display: inline-grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
  /* grid-template-columns: ; */
  /* grid-auto-flow: row;
  grid-auto-rows:  */
  gap: 20px;
`;

const LoadingDiv = styled.div`
  background-color: white;
  color: red;
`;

const ButtonRibbon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;


export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    TrendingRequest(pageNum).then(result => {
      setMovieList(result);
    });
  },[pageNum]);

  return (
    <>
      <WelcomeHeader>Welcome to Flixer</WelcomeHeader>
      {movieList.length === 0 ? 
        <LoadingDiv>Loading.....</LoadingDiv> 
        :
        <DisplayGrid>
          <TileGrid>
            {movieList.map(({id,poster_path,title}) => {
              return <MovieTile key={id} url={"https://image.tmdb.org/t/p/w300"+poster_path} title={title}/>
            })}
          </TileGrid>
          <ButtonRibbon>
            <Button onClick={() => setPageNum(pageNum !== 1 ? pageNum-1 : pageNum)} label="Previous Page"/>
            <Button onClick={() => setPageNum(pageNum !== movieList.length-1 ? pageNum+1 : pageNum)} label="Next Page"/>
          </ButtonRibbon>
        </DisplayGrid>
      }
    </>
  )
}
