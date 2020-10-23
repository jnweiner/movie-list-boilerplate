import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

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
        <br />
        <Search
          displayedMovies={this.state.displayedMovies}
          allMovies={this.state.allMovies}
          updateDisplayedMovies={this.updateDisplayedMovies}
        />
        <h2>Movie List</h2>
        <MovieList
          displayedMovies={this.state.displayedMovies}
        />
      </div>
    );
  }
}

export default App;