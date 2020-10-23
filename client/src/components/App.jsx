import React from 'react';
import MovieList from './MovieList.jsx';
import Options from './Options.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedMovies: this.props.movies,
      allMovies: this.props.movies
    };
    this.updateDisplayedMovies = this.updateDisplayedMovies.bind(this);
  }

  updateDisplayedMovies(newDisplayedMovies) {
    this.setState({
      displayedMovies: newDisplayedMovies
    });
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