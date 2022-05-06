import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const styles = {
  card: {
    padding: 20,
    background: 'black',
  },
};

function ArtistList(props) {
  return (
    <div style={styles.card}>
      <ListGroup horizontal>
        {props.artists.map((artist) => (
          <ListGroup.Item key={artist.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={artist.ArtistImage} />
              <Card.Body>
                <Card.Title>{artist.ArtistName}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ArtistList;
