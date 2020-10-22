import React from 'react';
import movies from '../data/movieData.js';
import MovieList from './MovieList.jsx';

const App = () => (
  <div>
    <h2>Movie List</h2>
    <MovieList movies={movies}/>
  </div>
);

export default App;