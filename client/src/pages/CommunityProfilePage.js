import React, { useState } from 'react';
import '../styles/style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const styles = {
  card: {
    padding: 20,
    background: 'black',
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
  },
  eventsTitle: {
    color: 'white',
    textShadow: '1px 3px 1px #9E9E9E',
    backgroundColor: 'black',
  },
};

function CommunityProfilePage(props) {
  return (
    <div>
      <p style={styles.eventsTitle}>Other Good Treble Users</p>
    </div>
  );
}

export default CommunityProfilePage;
