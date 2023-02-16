import styled from "styled-components";
import MovieTile from "@/components/MovieTile";
import Button from "@/components/Button";
import NavCircle from "@/components/NavCircle";
import LoadingSpinner from "@/components/LoadingSpinner";
import getTopRatedRequest from "@/requests/getTopRatedRequest";
import getGenresRequest from "@/requests/getGenresRequest";
import { useState,useEffect } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";

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
  padding: 30px;
  padding-top: 60px;
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

const ButtonRibbon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState({});
  const router = useRouter();

  const pageNum = parseInt(router.query.pageNum);
  const NavCirclesList = [-4,-3,-2,-1,0,1,2,3,4];

  useEffect(() => {
    getGenresRequest()
    .then(result => {
      setGenres(result);
      // console.log(result);
    })
    
    getTopRatedRequest(pageNum)
    .then(result => {
      setMovieList(result);
      // console.log(result);
    });
  },[pageNum]);

  return (
    <>
      {movieList.length === 0 ? 
        <LoadingSpinner />
        :
        <>
          <WelcomeHeader>{`Top Rated on TMDB`}</WelcomeHeader>
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
          </DisplayGrid>
          <ButtonRibbon>
            <Button onClick={() => router.push("/topRated/"+Math.max(1,pageNum-1))} label="Prev"/>
            {
              NavCirclesList.map((index) => {
                const calcPage = index + (pageNum>4 ? pageNum : 5);
                return <NavCircle 
                          key={calcPage} label={calcPage} selected={pageNum===calcPage}
                          onClick={() => router.push("/topRated/"+calcPage)} />
              })
            }
            <Button onClick={() => router.push("/topRated/"+Math.min(1000,pageNum+1))} label="Next"/>
          </ButtonRibbon>
        </>
      }
    </>
  )
}
