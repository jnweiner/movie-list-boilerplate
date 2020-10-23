import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    };

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched() {
    var newWatchedStatus = this.state.watched === false ? true : false;
    this.setState({
      watched: newWatchedStatus
    });
  }

  render() {
    return (
    <tr className="movie">
      <td>
        {this.props.title}
        <button className="watchstatus" onClick={this.toggleWatched}>{this.state.watched ? 'Watched' : 'Unwatched'}</button>
      </td>
    </tr>
    );
  }

}

export default Movie;