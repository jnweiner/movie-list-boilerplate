import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: this.props.movie.watched
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
    <tr className="movie">
      <td>
        {this.props.movie.title}
        <button className="watchstatus" onClick={this.toggleWatched}>{this.props.movie.watched ? 'Watched' : 'To Watch'}</button>
      </td>
    </tr>
    );
  }

}

export default Movie;