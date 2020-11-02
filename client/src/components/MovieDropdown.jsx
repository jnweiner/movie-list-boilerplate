import React from 'react';

const MovieDropdown = (props) => (
  <tr>
    <td className="movieInfo">
      <strong>Year:</strong> {props.movie.year} <br />
      <strong>Runtime:</strong> {props.movie.runtime} minutes <br />
      <strong>User rating:</strong> {props.movie.rating} <br />
      <br />
    <button className="watchStatus" onClick={props.toggleWatched}>{props.movie.watched ? 'Watched' : 'To Watch'}</button>
    </td>
    <td className="movieImage">
      <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster}`} />
    </td>
  </tr>
);

export default MovieDropdown;