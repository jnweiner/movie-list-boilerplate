import React from 'react';
import Search from './Search.jsx';
import Add from './Add.jsx';

var Options = (props) => {

  const filterByWatchedStatus = (status) => {

    var filtered = props.allMovies.filter(movie => {
      return movie.watched === status;
    });
    props.updateDisplayedMovies(filtered);
  };

  const render = () => (
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
      <button className="showWatched" onClick={() => filterByWatchedStatus(true)}>Show watched movies</button>
      <button className="showToWatch" onClick={() => filterByWatchedStatus(false)}>Show movies to watch</button>
    </div>
  );

  return render();
}


export default Options;