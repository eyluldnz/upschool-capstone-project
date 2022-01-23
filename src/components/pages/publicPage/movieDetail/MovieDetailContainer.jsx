import React from 'react';
import MovieSummary from './MovieSummary';
import MovieReviews from './MovieReviews';
import MovieCast from './MovieCast';
import MovieRecommendations from './MovieRecommendations';

export default function MovieDetailContainer({movie,credits,movieId,...props}) {

    console.log(movie)

  return <div className='container'>
      <div className="row">
          <div className="col-12"> <MovieSummary movieSummary={movie} credits={credits}/></div>
          <div className="col-12"><MovieCast movieId={movieId}/></div>
          <div className="col-sm-12 col-md-6" style={{ overflowY: 'overlay' ,height:200 }}> 
          <h5>Reviews</h5>
          <MovieReviews movieId={movieId}/></div>
          <div className="col-sm-12 col-md-6" style={{ overflowX: 'overlay'}}>
          <h5>Recommandations</h5>
              <MovieRecommendations movieId={movieId}/> 
              </div>
         
      </div>
   
  </div>;
}
