import axios from "axios";
import api from "@/api";

const urls = {
  genres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${api["api-key"]}&language=en-US`,
  movieDetails: `https://api.themoviedb.org/3/movie/`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api["api-key"]}&language=en-US&page=`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api["api-key"]}&language=en-US&page=`,
  trending: `https://api.themoviedb.org/3/trending/all/`,
  credits: `https://api.themoviedb.org/3/movie/`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${api["api-key"]}&language=en-US&query=`,
  similarMovies: `https://api.themoviedb.org/3/movie/`,
};

const getGenresList = async () => {
  const d = await axios.get(urls.genres);
  const data = await d.data.genres;
  const genreList = {};
  data.forEach(({ id, name }) => (genreList[id] = name));
  return genreList;
};

const getMovieDetails = async (movie_id) => {
  const urlSuffix = `${movie_id}?api_key=${api["api-key"]}&language=en-US`;
  const d = await axios.get(urls.movieDetails + urlSuffix);
  const data = await d.data;
  return data;
};

const getPopularMovies = async (pageNum) => {
  const d = await axios.get(urls.popular + pageNum);
  const data = await d.data.results;
  return data;
};

const getTopRatedMovies = async (pageNum) => {
  const d = await axios.get(urls.topRated + pageNum);
  const data = await d.data.results;
  return data;
};

const getTrendingMovies = async (timePeriod) => {
  const d = await axios.get(
    urls.trending + timePeriod + `?api_key=${api["api-key"]}`
  );
  const data = await d.data.results;
  return data;
};

const getCredits = async (id) => {
  const d = await axios.get(
    urls.credits + id + `/credits?api_key=${api["api-key"]}&language=en-US`
  );
  const data = await d.data;
  return data;
};

const getSearchResults = async (queryString, pageNo, adult = false) => {
  const d = await axios.get(
    urls.search + `${queryString}&page=${pageNo}&include_adult=${adult}`
  );
  const data = d.data;
  return data;
};

const getSimilarMovies = async (movieId) => {
  const d = await axios.get(
    urls.similarMovies +`${movieId}/similar?api_key=${api["api-key"]}&language=en-US&page=1`
  );
  const data = d.data;
  return data;
};

export {
  getGenresList,
  getMovieDetails,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getCredits,
  getSearchResults,
  getSimilarMovies
};
