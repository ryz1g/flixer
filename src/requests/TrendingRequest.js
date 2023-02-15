import axios from "axios";
import api from "@/api";

//const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api["api-key"]}&language=en-US&page=`;
const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api["api-key"]}`;

const TrendingRequest = async () => {
    const d = await axios.get(url);
    const data = await d.data.results;
    return data;
};

export default TrendingRequest;