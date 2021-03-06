import React, {
  useState
} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const styles = {
  profileHeader: {
    padding: 5,
    background: 'white',
    borderStyle: 'solid',
    borderWigth: 15,
    borderColor: 'black',
    textAlign: 'left',
  },
};

// function UserAvatar(props) {
//   return (
//     <div style={styles.card}>
//       <Row>
//         <Col lg={true}>
//           <Image
//             fluid="true"
//             roundedCircle="true"
//             src="https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10"
//           ></Image>
//         </Col>
//         <Col lg={true}>
//           <h2>USER NAME HERE</h2>
//         </Col>
//       </Row>
//     </div>
//   );
// }

function UserAvatar(props) {
  return ( <
    Row style = {
      styles.profileHeader
    } >

    <
    Col lg = {
      true
    } >
    <
    Image fluid = "true"
    roundedCircle = "true"
    src = "https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10" >
    < /Image> <
    /Col> <
    ListGroup horizontal >
    <
    ListGroup.Item ><h2>Community</h2>< /ListGroup.Item> <
    ListGroup.Item ><h2>USER NAME HERE</h2>< /ListGroup.Item> <
    ListGroup.Item ><h2>My Events</h2>< /ListGroup.Item> <
    ListGroup.Item ><h2>Events</h2>< /ListGroup.Item> <
    /ListGroup> <
    /Row>
  );
}

// function UserAvatar(props) {
//   return (
//     <div style={styles.card}>
//       <ListGroup horizontal>
//         <ListGroup.Item>
//           <Image
//             fluid="true"
//             roundedCircle="true"
//             src="https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10"
//           ></Image>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <h2>USER NAME HERE</h2>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <h2>My Events</h2>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <h2>Community</h2>
//         </ListGroup.Item>
//         <ListGroup.Item>
//           <h2>Community Events</h2>
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// }

export default UserAvatar;