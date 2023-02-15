import axios from "axios";
import { useEffect } from "react";

const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=17605620b03edceff6e052ed68e6ee0a&language=en-US&page=1";

const TrendingRequest = () => {
    var data;
    const fetchData = async () => {
        try {
            const res = await axios.get(url);
            return res.data;
        }
        catch(err) {
            console.log(err);
        }
    }

    // useEffect(() => {
    //     data=fetchData();
    // },[])

    return data;
};

export default TrendingRequest;