import React from 'react';
import '../../styles/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const styles = {
  artistDisplay: {
    margin: '5px 5px 5px 5px',
  },
};

function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <h1>USERNAME HERE!!!</h1>
          <h2>YOUR PROFILE</h2>
          <header className="display-flex justify-space-between align-center p-2">
            <h1></h1>
            <h3>
              Let's get your Spotify songs imported! Click the "Import Songs"
              button to import some of your recent favorites! To start, we'll
              import 25 of your most recently liked songs.
            </h3>
            <a href="">
              <button id="button-spotify-import">Import Songs</button>
            </a>
          </header>
        </Row>
        <Row>Favorite Artists</Row>
        <ListGroup horizontal>
          <ListGroup.Item style={styles.artistDisplay}>Artist 1</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 2</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 3</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 4</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 5</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 6</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 7</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 8</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>Artist 9</ListGroup.Item>
          <ListGroup.Item style={styles.artistDisplay}>
            Artist 10
          </ListGroup.Item>
        </ListGroup>
        <Row>Favorite Songs</Row>
      </Container>
    </div>
  );
}

export default Profile;
