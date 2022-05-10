import React from 'react';
import '../styles/style.css';

const styles = {
  aboutMe: {
    fontSize: '1.2rem',
    color: 'white',
    padding: '15px',
  },
};

export default function About() {
  return (
    <div className="container-fluid about-page my-2">
      <p style={styles.aboutMe}>
        Good Treble has one goal. We want to help users find events for artists
        that they love, and make friends with other people who love those same
        artists and events. As music lovers, we know how rewarding it can be to
        see your favorite artist live. We want to simplify the process of
        finding upcoming events being performed by your favorite artists.
      </p>
    </div>
  );
}
