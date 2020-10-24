import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <table className="movielist">
    <tbody>
      {props.displayedMovies.map((movie) => 
        <Movie movie={movie} key={movie.title}/>
      )}
    </tbody>
  </table>
);

export default MovieList;