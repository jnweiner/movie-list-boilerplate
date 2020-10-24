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
        updateMessage={props.updateMessage}
      />
      <br />
      <Add addMovie={props.addMovie} updateMessage={props.updateMessage}/>
      <br />
      <button className="showall"
        onClick={() => { props.updateDisplayedMovies(props.allMovies); props.updateMessage('Your full library...')}}>
        Show all movies
      </button>
      <button className="showWatched"
        onClick={() => { filterByWatchedStatus(true); props.updateMessage('Your watched movies...') }}>
        Show watched movies
      </button>
      <button className="showToWatch"
        onClick={() => { filterByWatchedStatus(false); props.updateMessage('Your watch list...') } }>
        Show movies to watch
      </button>
    </div>
  );

  return render();
}


export default Options;