import React from 'react';
import MovieDropdown from './MovieDropdown.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: this.props.movie.watched,
      showInfo: false
    };

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched() {
    var newWatchedStatus = this.props.movie.watched === false ? true : false;
    this.setState({
      watched: newWatchedStatus
    });
    this.props.movie.watched = newWatchedStatus;
  }

  render() {
    return (
    <div className="movie" onClick={() => this.setState({showInfo: !this.state.showInfo})}>
      {this.props.movie.title}
      <button className="watchStatus" onClick={this.toggleWatched}>{this.props.movie.watched ? 'Watched' : 'To Watch'}</button>
      {this.state.showInfo ? <MovieDropdown />: null}
    </div>
    );
  }

}

export default Movie;