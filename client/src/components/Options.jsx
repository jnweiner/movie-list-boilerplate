import React from 'react';
import Search from './Search.jsx';
import Add from './Add.jsx';

var Options = (props) => (
  <div className="options">
    <Search
      displayedMovies={props.displayedMovies}
      allMovies={props.allMovies}
      updateDisplayedMovies={props.updateDisplayedMovies}
    />
    <br />
    <Add addMovie={props.addMovie}/>
    <br />
    <button className="showall" onClick={() => props.updateDisplayedMovies(props.allMovies)}>Show all movies</button>
  </div>
);

export default Options;