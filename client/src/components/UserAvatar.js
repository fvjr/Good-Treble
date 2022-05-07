import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const styles = {
  card: {
    padding: 20,
    background: 'white',
  },
};

function UserAvatar(props) {
  return (
    <div style={styles.card}>
      <Image
        fluid="true"
        roundedCircle="true"
        src="https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10"
      ></Image>
      <h2>USER NAME HERE</h2>
    </div>
  );
}

export default UserAvatar;
