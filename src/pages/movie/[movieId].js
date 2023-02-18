import { useRouter } from "next/router";
import { getMovieDetails } from "@/requests";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState,useEffect } from "react";

const MoviePage = () => {
    const router = useRouter();
    const movieId = router.query.movieId;
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        getMovieDetails(movieId).then((result) => setMovieDetails(result));
    },[])

    return (
        <div>
            {
                Object.keys(movieDetails).length === 0 ? <LoadingSpinner /> 
                :
                JSON.stringify(movieDetails)
            }
        </div>
    );
}

export default MoviePage;