import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  importSection: {
    padding: 20,
    background: 'black',
  },
};

function SpotifyImport() {
  return (
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
  );
}

export default SpotifyImport;
