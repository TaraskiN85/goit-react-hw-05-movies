import axios from 'axios';

const API_KEY = '1a5fb011f466dfd37004c059e5f320d2';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTVmYjAxMWY0NjZkZmQzNzAwNGMwNTllNWYzMjBkMiIsInN1YiI6IjY1YWJlNzliYmU2ZDg4MDBiZTkyOTAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gi3IHP7e4b3LExGkiLcOHZZ9OFaJCzK8pzjtQ32tlKE';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`
  ${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieDetails = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}`,
    params: { language: 'en-US' },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  };
  const { data } = await axios(options);
  return data;
};

export const fetchSearchedMovies = async movieName => {
  // --request GET \
  //    --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
  //    --header 'accept: application/json'
  const options = {
    method: 'GET',
    url: `${BASE_URL}/search/movie?query=${movieName}`,
    params: { language: 'en-US', include_adult: true, page: 1 },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  };
  const { data } = await axios(options);
  return data;
};

export const fetchMovieComments = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/reviews?`,
    params: { language: 'en-US' },
    page: 1,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  };
  const { data } = await axios(options);
  return data;
};

export const fetchMovieCast = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/credits?`,
    params: { language: 'en-US' },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json',
    },
  };
  const { data } = await axios(options);
  return data;
};
