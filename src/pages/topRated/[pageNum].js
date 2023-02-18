import styled from "styled-components";
import MovieList from "@/components/MovieList";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getTopRatedMovies }  from "@/requests";
import { useState,useEffect } from "react";
import { colors } from "@/constants";
import { useRouter } from "next/router";
import PageNavigationBar from "@/components/PageNavigationBar";

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
  align-items: center;
  gap: 5px;
`;

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const router = useRouter();
  const pageNum = parseInt(router.query.pageNum);

  useEffect(() => {
    getTopRatedMovies(pageNum)
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
          <MovieList movieList={movieList} currentPage={pageNum}/>
          <ButtonRibbon>
            <PageNavigationBar baseUrl={"/topRated/"} currentPage={pageNum}/>
          </ButtonRibbon>
        </>
      }
    </>
  )
}
