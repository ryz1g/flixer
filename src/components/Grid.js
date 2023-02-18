import styled from "styled-components";
import MovieTile from "@/components/MovieTile";
import { getGenresList }from "@/requests";
import { useState,useEffect } from "react";

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
  gap: 20px;
`;

const Grid = ({movieList}) => {
    const [genres, setGenres] = useState({});

    useEffect(() => {
      getGenresList()
      .then(result => {
        setGenres(result);
        // console.log(result);
      })
    },[]);

    return (
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
    );
}

export default Grid;