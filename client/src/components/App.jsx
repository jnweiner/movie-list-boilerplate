import React from 'react';
import MovieList from './MovieList.jsx';
import Options from './Options.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      displayedMovies: []
    };
    this.updateDisplayedMovies = this.updateDisplayedMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  updateDisplayedMovies(newDisplayedMovies) {
    this.setState({
      displayedMovies: newDisplayedMovies
    });
  }

  addMovie(title) {
    var newMovie = {
      title: title
    };

    this.state.allMovies.push(newMovie);
    this.updateDisplayedMovies(this.state.allMovies);
  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <br />
        <Options
          displayedMovies={this.state.displayedMovies}
          allMovies={this.state.allMovies}
          updateDisplayedMovies={this.updateDisplayedMovies}
          addMovie={this.addMovie}
        />
        <br />
        <MovieList
          displayedMovies={this.state.displayedMovies}
        />
      </div>
    );
  }
}

export default App;