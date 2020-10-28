import React from 'react';

const MovieDropdown = (props) => (
  <tr>
    <td className="movieInfo">INFO HERE ... IMAGE HERE
    <button className="watchStatus" onClick={props.toggleWatched}>{props.movie.watched ? 'Watched' : 'To Watch'}</button>
    </td>
  </tr>
);

export default MovieDropdown;