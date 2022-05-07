import React from 'react';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import {ListGroup,Col,Button,Row} from 'react-bootstrap'


function FavoriteSongs(props) {
  return (
    // <ul className="list-group">
    //   {props.songs.map((song) => (
    //     <li className="list-group-item" key={song.id}>
    //       {song.SongName}
    //       <img src={song.AlbumImage} width="100" height="50" alt="song " />
    //     </li>
    //   ))} vuvfu
    // </ul> 
    <ListGroup as="ol" numbered>
      {props.songs.map((song) => (
  <ListGroup.Item 
    as="li"
    className="d-flex justify-content-between align-items-start"
  > 
    <div className="ms-2 me-auto">
      <Row >
      <Col md = {3}>
    <img src={song.AlbumImage}  alt="song" />
    </Col>
    <Col md= {8} >
      <div className="fw-bold" key={song.id}>{song.SongName}</div>
      {song.ArtistName}
      </Col>
   
    <Col md = {1}>
     <Button bg="primary" pill>
       14
     </Button>
     </Col>
        </Row>
        </div>
  </ListGroup.Item>
  ))}
  </ListGroup>
  );
}

export default FavoriteSongs;
