import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <table className="movieList">
    {props.displayedMovies.map((movie) => 
      <Movie movie={movie} key={movie.title}/>
    )}
  </table>
);

export default MovieList;