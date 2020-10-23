import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <table className="movielist">
    <tbody>
      {props.movies.map((movie, i) => 
        <Movie title={movie.title} key={i}/>
      )}
    </tbody>
  </table>
);

export default MovieList;