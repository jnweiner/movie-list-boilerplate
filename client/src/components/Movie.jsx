import React from 'react';
import MovieDropdown from './MovieDropdown.jsx';
import axios from 'axios';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: this.props.movie.watched,
      selected: false
    };

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched() {
    var newWatchedStatus = this.props.movie.watched === false ? true : false;
    this.setState({
      watched: newWatchedStatus
    });
    this.props.movie.watched = newWatchedStatus;
    axios.put('/movies', this.props.movie);
  }

  render() {
    return (
    <tbody>
      <tr>
        <td colSpan="2" className={this.state.selected ? "movie selected" : "movie"} onClick={() => this.setState({selected: !this.state.selected})}>
          {this.props.movie.title}
        </td>
      </tr>
      {this.state.selected ? <MovieDropdown toggleWatched={this.toggleWatched} movie={this.props.movie}/>: null}
    </tbody>
    );
  }

}

export default Movie;