import React from 'react';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function FavoriteSongs(props) {
  return (
    <ul className="list-group">
      {props.songs.map((song) => (
        <li className="list-group-item" key={song.id}>
          {song.SongName}
          <img src={song.AlbumImage} width="100" height="50" alt="song " />
        </li>
      ))}
    </ul>
  );
}

export default FavoriteSongs;
