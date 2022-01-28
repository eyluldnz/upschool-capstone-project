import axios from 'axios';

const BASE_URL = 'http://api.themoviedb.org/3';

const BASE_AXIOS = axios.create({
    baseURL: BASE_URL,
    
});

export const fetchMovieById = (id) => BASE_AXIOS.get(`/movie/${id}?api_key=38c02880f9f69c49ba83e5b023f7dc67`);

export const fetchDisvocerMovie = () => BASE_AXIOS.get("/discover/movie?api_key=38c02880f9f69c49ba83e5b023f7dc67")

export const fetchTrendByFilter=(filter)=>BASE_AXIOS.get(`/trending/movie/${filter}?api_key=38c02880f9f69c49ba83e5b023f7dc67`);

export const fetchMovieCredits=(movieId)=>BASE_AXIOS.get(`/movie/${movieId}/credits?api_key=38c02880f9f69c49ba83e5b023f7dc67`);

export const fetcRecommandation=(movieid)=>BASE_AXIOS.get(`/movie/${movieid}/recommendations?api_key=38c02880f9f69c49ba83e5b023f7dc67`);

export const fetchReview=(movieId)=>BASE_AXIOS.get(`/movie/${movieId}/reviews?api_key=38c02880f9f69c49ba83e5b023f7dc67`);

export const fetchGenres=()=>BASE_AXIOS.get('/genre/movie/list?api_key=38c02880f9f69c49ba83e5b023f7dc67');