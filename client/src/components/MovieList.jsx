import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <table className="movielist">
    <tbody>
      {props.displayedMovies.map((movie, i) => 
        <Movie movie={movie} key={i}/>
      )}
    </tbody>
  </table>
);

export default MovieList;