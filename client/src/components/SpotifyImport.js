import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const styles = {
  importSection: {
    padding: 20,
    background: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function SpotifyImport() {
  return (
<<<<<<< HEAD
    <Row style={styles.importSection}>
      <Col>
        <h3 id="importDescription">
          Let's get your Spotify songs imported! Click the "Import Songs" button
          to see your favorite songs and artists!
        </h3>
      </Col>
      <Col>
        <a href="">
          <button id="button-spotify-import">Import Songs</button>
        </a>
      </Col>
    </Row>
=======
    <div>
      <Row style={styles.importSection}>
        <Col md={6}>
          <h3>
            Let's get your Spotify songs imported! Click the "Import Songs"
            button to see your favorite songs and artists!
          </h3>
        </Col>
        <Col md={6}>
          <a href="">
            <button id="button-spotify-import">Import Songs</button>
          </a>
        </Col>
      </Row>
    </div>
>>>>>>> 6783fd68df577b1fe269e38d83a3c6fcb8bc648a
  );
}

export default SpotifyImport;
