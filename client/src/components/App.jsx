import React from 'react';
import movies from '../data/movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

const App = () => (
  <div>
    <br />
    <Search />
    <h2>Movie List</h2>
    <MovieList movies={movies}/>
  </div>
);

export default App;