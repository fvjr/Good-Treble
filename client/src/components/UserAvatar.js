import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const styles = {
  profileHeader: {
    padding: 20,
    background: 'white',
    borderStyle: 'solid',
    borderWdith: 15,
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
  return (
    <Row style={styles.profileHeader}>
      <Col lg={true}>
        <Image
          fluid="true"
          roundedCircle="true"
          src="https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10"
        ></Image>
      </Col>
      <Col>
        <h2>Community</h2>
      </Col>
      <Col>
        <h2>USER NAME HERE</h2>
      </Col>
      <Col>
        <Link to="/myEvents">
          <h2>My Events</h2>
        </Link>
      </Col>
      <Col>
        <h2>Events</h2>
      </Col>
    </Row>
  );
}

export default UserAvatar;
