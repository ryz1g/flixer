import axios from "axios";
import api from "@/api";

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api["api-key"]}&language=en-US&page=`;

const TrendingRequest = async (pageNum) => {
    const d = await axios.get(url+pageNum);
    const data = await d.data.results;
    return data;
};

export default TrendingRequest;