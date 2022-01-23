import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import { fetchMovieById,fetchMovieCredits } from '../../../api';

import { useParams } from 'react-router-dom';
import MovieDetailContainer from './movieDetail/MovieDetailContainer';

export default function MovieDetail() {

    const {movieId}=useParams();

    const {data,isLoading}=useQuery('movies',()=>fetchMovieById(movieId));
    const {data:credits,}=useQuery('credits',()=>fetchMovieCredits(movieId));
    
    if(isLoading){
        return <h1>
        Yükleniyor
    </h1>
    }
    
  return <div className='my-5'>
      <MovieDetailContainer movie={data?.data} credits={credits} movieId={movieId}/>
  </div>;
}