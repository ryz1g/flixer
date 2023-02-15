import axios from "axios";
import api from "@/api";

const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api["api-key"]}&language=en-US`;

const GenresListRequest = async () => {
    const d = await axios.get(url);
    const data = await d.data.genres;
    const genreList = {};
    data.forEach(({id,name}) => genreList[id]=name);
    return genreList;
};

export default GenresListRequest;