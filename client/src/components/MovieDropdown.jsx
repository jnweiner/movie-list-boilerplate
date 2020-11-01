import React from 'react';

const MovieDropdown = (props) => (
  <tr>
    <td className="movieInfo">
      Release date: {props.movie.date} <br />
      Runtime: {props.movie.runtime} <br />
      User rating: {props.movie.rating} <br />
    <button className="watchStatus" onClick={props.toggleWatched}>{props.movie.watched ? 'Watched' : 'To Watch'}</button>
    </td>
    <td className="movieImage">
      <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster}`} />
    </td>
  </tr>
);

export default MovieDropdown;