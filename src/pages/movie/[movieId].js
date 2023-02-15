import { useRouter } from "next/router";
import getMovieDetailsRequest from "@/requests/getMovieRequest";
import { useState,useEffect } from "react";

const MoviePage = () => {
    const router = useRouter();
    const movieId = router.query.movieId;
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        getMovieDetailsRequest(movieId).then((result) => setMovieDetails(result))
    },[])

    return (
        <div>
            <div>{`Movie ID -> ${movieId}`}</div>
            {JSON.stringify(movieDetails)}
        </div>
    );
}

export default MoviePage;