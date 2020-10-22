import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <ul>
    {props.movies.map(movie => 
      <Movie title={movie.title}/>
    )}
  </ul>
);

export default MovieList;