import styled from "styled-components";
import MovieTile from "@/components/MovieTile";
import Button from "@/components/Button";
import trendingRequest from "@/requests/trendingRequest";
import getGenresRequest from "@/requests/getGenresRequest";
import { useState,useEffect } from "react";
import { colors } from "@/constants";

const HomePageBase = styled.div`
  background-color: black;
`;

const WelcomeHeader = styled.div`
  font-size: 4rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  padding: 5px;
  color: ${colors.theme1};
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
  grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
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
  // const [pageNum, setPageNum] = useState(1);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    getGenresRequest()
    .then(result => {
      setGenres(result);
      // console.log(result);
    })
    
    trendingRequest()
    .then(result => {
      setMovieList(result);
      // console.log(result);
    });
  },[]);

  return (
    <HomePageBase>
      <WelcomeHeader>Welcome to Flixer</WelcomeHeader>
      {movieList.length === 0 ? 
        <LoadingDiv>Loading.....</LoadingDiv> 
        :
        <DisplayGrid>
          <TileGrid>
            {movieList.map(({id,poster_path,title,overview,vote_average,vote_count,genre_ids}) => {
              return <MovieTile key={id} 
                                id={id}
                                url={"https://image.tmdb.org/t/p/w300"+poster_path} 
                                title={title}
                                overview={overview}
                                vote_average={Math.floor(vote_average*100)/100}
                                vote_count={vote_count}
                                genre_ids={genre_ids}
                                genres={genre_ids.map((id) => genres[id])}/>
            })}
          </TileGrid>
          {/* <ButtonRibbon>
            <Button onClick={() => setPageNum(pageNum !== 1 ? pageNum-1 : pageNum)} label="Previous Page"/>
            <Button onClick={() => setPageNum(pageNum !== movieList.length-1 ? pageNum+1 : pageNum)} label="Next Page"/>
          </ButtonRibbon> */}
        </DisplayGrid>
      }
    </ HomePageBase>
  )
}
