import React, {
  useState
} from 'react';
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

// function ArtistList(props) {
//   return (
//     <div>
//       <h2 styles={styles.card}>Your Favorite Artists</h2>
//       <ListGroup horizontal>
//         {props.artists.map((artist) => (
//           <ListGroup.Item key={artist.id}>
//             <Card style={{ width: '18rem' }}>
//               <Col md={4}>
//                 <Card.Img
//                   variant="top"
//                   roundedCircle="true"
//                   src={artist.ArtistImage}
//                 />
//               </Col>
//               <Card.Body>
//                 <Col md={8}>
//                   <Card.Title>{artist.ArtistName}</Card.Title>
//                 </Col>
//                 <Card.Text></Card.Text>
//               </Card.Body>
//             </Card>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

// function ArtistList(props) {
//   return (
//     <div>
//       <h2 styles={styles.card}>Your Favorite Artists</h2>
//       <ListGroup horizontal>
//         <Row>
//           {props.artists.map((artist) => (
//             <Col>
//               <Card style={{ width: '18rem' }}>
//                 <img
//                   fluid="true"
//                   src={artist.ArtistImage}
//                   height="200px"
//                   width="200px"
//                   alt="artist profile pic"
//                 />
//                 <Card.Body>
//                   <Card.Title>{artist.ArtistName}</Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </ListGroup>
//     </div>
//   );
// }

//working 05/09/22
// function ArtistList(props) {
//   return (
//     <div>
//       <h2 style={styles.title}>Your Favorite Artists</h2>
//       <ListGroup horizontal>
//         <Row>
//           {props.artists.map((artist) => (
//             <Col>
//               <Card style={{ width: '18rem' }}>
//                 <Image
//                   style={styles.image}
//                   key={artist.id}
//                   variant="top"
//                   src={artist.ArtistImage}
//                   height="215"
//                   width="215"
//                   borderRadius="33%"
//                   roundedCircle="true"
//                 />
//                 <Card.Body>
//                   <Card.Title style={styles.artistName}>
//                     {artist.ArtistName}
//                   </Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </ListGroup>
//     </div>
//   );
// }

// function ArtistList(props) {
//   return (
//     <div>
//       <h2 style={styles.title}>Your Favorite Artists</h2>
//       <ListGroup horizontal>
//         <Row>
//           {props.artists.map((artist) => (
//             <Col>
//               <Card style={{ width: '18rem' }}>
//                 <Image
//                   style={styles.image}
//                   key={artist.id}
//                   variant="top"
//                   src={artist.ArtistImage}
//                   height="215"
//                   width="215"
//                   borderRadius="33%"
//                   roundedCircle="true"
//                 />
//                 <Card.Body>
//                   <Card.Title style={styles.artistName}>
//                     {artist.ArtistName}
//                   </Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </ListGroup>
//     </div>
//   );
// }

//developing carousel
function ArtistList(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( <
    Carousel variant = "dark"
    activeIndex = {
      index
    }
    onSelect = {
      handleSelect
    } >
    <
    Carousel.Item >
    <
    ListGroup horizontal >
    <
    Row > {
      props.artists.slice(0, 4).map((artist, id) => ( <
        Col > {
          /* <Card key={id} style={{ width: '18rem' }}> */ } <
        Image style = {
          styles.image
        }
        key = {
          artist.id
        }
        src = {
          artist.ArtistImage
        }
        height = "215"
        width = "215"
        roundedCircle = "true" /
        > {
          /* <Card.Body> */ } <
        p style = {
          styles.artistName
        } > {
          artist.ArtistName
        } < /p> {
          /* </Card.Body>
                          </Card> */
        } <
        /Col>
      ))
    } <
    /Row> <
    /ListGroup> <
    Carousel.Caption > < /Carousel.Caption> <
    /Carousel.Item> <
    Carousel.Item >
    <
    ListGroup horizontal >
    <
    Row > {
      props.artists.slice(4, 8).map((artist) => ( <
        Col > {
          /* <Card key={id} style={{ width: '18rem' }}> */ } <
        Image style = {
          styles.image
        }
        key = {
          artist
        }
        src = {
          artist.ArtistImage
        }
        height = "215"
        width = "215"
        roundedCircle = "true" /
        > {
          /* <Card.Body> */ } <
        p style = {
          styles.artistName
        } > {
          artist.ArtistName
        } < /p> {
          /* </Card.Body>
                          </Card> */
        } <
        /Col>
      ))
    } <
    /Row> <
    /ListGroup> <
    Carousel.Caption > < /Carousel.Caption> <
    /Carousel.Item> <
    /Carousel>
  );
}

export default ArtistList;