import axios from "axios";
import api from "@/api";

const MovieDetailsRequest = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api["api-key"]}&language=en-US`;
    const d = await axios.get(url);
    const data = await d.data;
    return data;
};

export default MovieDetailsRequest;