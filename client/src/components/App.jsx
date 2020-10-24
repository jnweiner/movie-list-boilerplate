import React from 'react';
import MovieList from './MovieList.jsx';
import Options from './Options.jsx';
import Message from './Message.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      displayedMovies: [],
      message: ''
    };
    this.updateDisplayedMovies = this.updateDisplayedMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateDisplayedMovies(newDisplayedMovies) {
    this.setState({
      displayedMovies: newDisplayedMovies
    });
  }

  addMovie(title) {
    var newMovie = {
      title: title,
      watched: false
    };

    this.state.allMovies.push(newMovie);
    this.updateDisplayedMovies(this.state.allMovies);
  }

  updateMessage(message) {
    this.setState({
      message: message
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
          addMovie={this.addMovie}
          updateMessage={this.updateMessage}
        />
        <br />
        <Message messageToUser={this.state.message}/>
        <br />
        <MovieList
          displayedMovies={this.state.displayedMovies}
        />
      </div>
    );
  }
}

export default App;