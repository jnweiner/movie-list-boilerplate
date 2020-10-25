import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <div className="movielist">
      {props.displayedMovies.map((movie) => 
        <Movie movie={movie} key={movie.title}/>
      )}
  </div>
);

export default MovieList;