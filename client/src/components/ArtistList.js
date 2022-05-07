import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  card: {
    padding: 20,
    background: 'black',
  },
};

// function ArtistList(props) {
//   return (
//     <div>
//       <ListGroup horizontal>
//         {props.artists.map((artist) => (
//           <ListGroup.Item key={artist.id}>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src={artist.ArtistImage} />
//               <Card.Body>
//                 <Card.Title>{artist.ArtistName}</Card.Title>
//                 <Card.Text></Card.Text>
//               </Card.Body>
//             </Card>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

function ArtistList(props) {
  return (
    <div>
      <h2 styles={styles.card}>Your Favorite Artists</h2>
      <Container>
        <ListGroup horizontal>
          {props.artists.map((artist) => (
            <ListGroup.Item key={artist.id}>
              <Row>
                <Card style={{ width: '18rem' }}>
                  <Col md={3}>
                    <Card.Img
                      variant="top"
                      roundedCircle="true"
                      src={artist.ArtistImage}
                    />
                  </Col>
                  <Card.Body>
                    <Col md={8}>
                      <Card.Title>{artist.ArtistName}</Card.Title>{' '}
                    </Col>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default ArtistList;
