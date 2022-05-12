import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

const styles = {
  title: {
    padding: 20,
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'center',
  },
  image: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    boxShadow: '6px 1px 9px 1px #CD33FF',
  },
  artistName: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '1px 3px 1px #9E9E9E',
  },
  carousel: {
    position: 'absolute',
    left: '50%',
  },
};

// function ArtistList(props) {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div>
//       <h2>Your Most Listened to Artists</h2>
//       <Carousel
//         style={styles.carousel}
//         variant="dark"
//         activeIndex={index}
//         onSelect={handleSelect}
//       >
//         <Carousel.Item>
//           <ListGroup horizontal>
//             <Row>
//               {props.artists.slice(0, 4).map((artist, id) => (
//                 <Col>
//                   <Image
//                     style={styles.image}
//                     key={artist.id}
//                     src={artist.ArtistImage}
//                     height="215"
//                     width="215"
//                     roundedCircle="true"
//                   />
//                   <p style={styles.artistName}>{artist.ArtistName}</p>
//                 </Col>
//               ))}
//             </Row>
//           </ListGroup>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ListGroup horizontal>
//             <Row>
//               {props.artists.slice(4, 8).map((artist, id) => (
//                 <Col>
//                   <Image
//                     style={styles.image}
//                     key={artist.id}
//                     src={artist.ArtistImage}
//                     height="215"
//                     width="215"
//                     roundedCircle="true"
//                   />
//                   <p style={styles.artistName}>{artist.ArtistName}</p>
//                 </Col>
//               ))}
//             </Row>
//           </ListGroup>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

function ArtistList(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h2>Your Most Listened to Artists</h2>
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ListGroup
            horizontal
            className="border d-flex align-items-center justify-content-center"
          >
            <Row>
              {props.artists.slice(0, 4).map((artist, id) => (
                <Col>
                  <Image
                    style={styles.image}
                    key={artist.id}
                    src={artist.ArtistImage}
                    height="215"
                    width="215"
                    roundedCircle="true"
                  />
                  <p style={styles.artistName}>{artist.ArtistName}</p>
                </Col>
              ))}
            </Row>
          </ListGroup>
        </Carousel.Item>
        <Carousel.Item>
          <ListGroup
            horizontal
            className="border d-flex align-items-center justify-content-center"
          >
            <Row>
              {props.artists.slice(4, 8).map((artist, id) => (
                <Col>
                  <Image
                    style={styles.image}
                    key={artist.id}
                    src={artist.ArtistImage}
                    height="215"
                    width="215"
                    roundedCircle="true"
                  />
                  <p style={styles.artistName}>{artist.ArtistName}</p>
                </Col>
              ))}
            </Row>
          </ListGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ArtistList;
