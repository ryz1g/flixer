import styled from "styled-components";
import MovieRibbon from "@/components/MovieRibbon";
import { getGenresList }from "@/requests";
import { useState,useEffect } from "react";

const DisplayList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px 30px 30px;
`;

const RibbonList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 5px;
`;

const MovieList = ({movieList, currentPage}) => {
    const [genres, setGenres] = useState({});

    useEffect(() => {
      getGenresList()
      .then(result => {
        setGenres(result);
        // console.log(result);
      })
    },[]);

    return (
        <DisplayList>
            <RibbonList>
              {movieList.map(({id,poster_path,title,vote_average,vote_count,genre_ids,release_date}, index) => {
                return <MovieRibbon key={id} 
                                  id={id}
                                  rank={index+1}
                                  currentPage={currentPage}
                                  url={"https://image.tmdb.org/t/p/w300"+poster_path} 
                                  title={title}
                                  vote_average={vote_average}
                                  vote_count={vote_count}
                                  genre_ids={genre_ids}
                                  genres={genre_ids.map((id) => genres[id])}
                                  release_date={release_date}/>
              })}
            </RibbonList>
          </DisplayList>
    );
}

export default MovieList;