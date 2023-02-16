import axios from "axios";
import api from "@/api";

const url = `https://api.themoviedb.org/3/trending/all/`;

const TrendingRequest = async (timePeriod) => {
    const d = await axios.get(url+timePeriod+`?api_key=${api["api-key"]}`);
    const data = await d.data.results;
    return data;
};

export default TrendingRequest;