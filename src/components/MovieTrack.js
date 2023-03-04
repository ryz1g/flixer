import styled from "styled-components";
import MovieTrackTile from "./MovieTrackTile";

const Track = styled.div`
    position: relative;
    // top: 40vw;
    padding: 10px 0px 10px 0px;
    // width: calc( max(20vw, 230px) + 80vw - 250px);
    width: calc(80vw - 155px + max(20vw, 230px));
    min-width: 1071px;
    display: flex;
    gap: 5px;
    overflow-x: hidden;
`;

// eslint-disable-next-line react/display-name
const MovieTrack = ({movieList}) => {
    return (
        <Track>
            {movieList.map(
            ({ id, poster_path, title, vote_average, vote_count, genre_ids }) => {
                return (
                <MovieTrackTile
                    key={id}
                    id={id}
                    url={"https://image.tmdb.org/t/p/w300" + poster_path}
                    title={title}
                    vote_average={Math.floor(vote_average * 100) / 100}
                    vote_count={vote_count}
                />
                );
            }
        )}
        </Track>
    );
};

export default MovieTrack;