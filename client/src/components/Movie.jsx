import React from 'react';

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
    <table>
      <tbody className="movie" onClick={() => this.setState({showInfo: !this.state.showInfo})}>
        <tr>
          <td>
            {this.props.movie.title}
            <button className="watchstatus" onClick={this.toggleWatched}>{this.props.movie.watched ? 'Watched' : 'To Watch'}</button>
          </td>
        </tr>
      {this.state.showInfo ? <tr><td className="movieinfo">MOVIE INFO HERE</td></tr> : null}
      </tbody>
    </table>
    );
  }

}

export default Movie;