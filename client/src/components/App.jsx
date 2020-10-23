import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedMovies: props.movies
    };
  }

  render() {
    return (
      <div>
        <br />
        <Search />
        <h2>Movie List</h2>
        <MovieList movies={this.state.displayedMovies}/>
      </div>
    );
  }
}

export default App;