import React from 'react';
import MovieList from './MovieList.jsx';
import Options from './Options.jsx';
import Message from './Message.jsx';
import axios from 'axios';
import API_KEY from '../../config/tmbd.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      displayedMovies: [],
      message: 'Your full library...'
    };
    this.updateDisplayedMovies = this.updateDisplayedMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  updateDisplayedMovies(newDisplayedMovies) {
    this.setState({
      displayedMovies: newDisplayedMovies
    });
  }

  fetchMovies() {
    axios.get('/movies')
      .then(movies => {
        this.setState({
          allMovies: movies.data
        });
        this.updateDisplayedMovies(this.state.allMovies);
      })
      .catch(err => {
        console.log(err);
      });
  }

  addMovie(userInput) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${userInput}`)
      .then(response => {
        return response.data.results[0].id;
      })
      .then(movieId => {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      })
      .then(movieDetails => {
        var movie = {
          watched: 0,
          title: movieDetails.data.title,
          year: movieDetails.data.release_date.slice(0, 4),
          runtime: movieDetails.data.runtime,
          poster: movieDetails.data.poster_path,
          rating: movieDetails.data.vote_average
        };
        return axios.post('/movies', movie);
      })
      .then(() => {
        this.fetchMovies();
      })
      .catch(err => {
        console.log(err);
      });
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
        <p>
        <em>This product uses the TMDb API but is not endorsed or certified by TMDb.</em>
        </p>
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