import React from 'react';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function ArtistList(props) {
  return (
    <ul className="list-group">
      {props.artists.map((artist) => (
        <li className="list-group-item" key={artist.id}>
          {artist.ArtistName}
          <img
            src={artist.ArtistImage}
            width="100"
            height="50"
            alt="artist profile picture"
          />
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;
