import React from 'react';
import '../styles/style.css';

const styles = {
  aboutMe: {
    fontSize: '1.5rem',
    color: 'white',
    padding: '40px',
    backgroundColor: 'black',
    backgroundImage: 'url(https://i.redd.it/qyxg9y93iny81.png)',
    borderRadius: '5%',
    height: '800px',
    width: '800px',
  },
  text: {
    backgroundColor: 'black',
    fontSize: '1.5rem',
    color: 'white',
    padding: '40px',
    borderRadius: '5%',
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    boxShadow: '6px 1px 9px 1px #04d9ff',
  },
  outsideDiv: {
    boxShadow: '6px 1px 9px 1px #04d9ff',
  },
};

export default function About() {
  return (
    <div className="container-fluid about-page my-2" style={styles.aboutMe}>
      <p style={styles.text}>
        Looking for Treble has one goal. We want to help users find events for artists
        that they love, and make friends with other people who love those same
        artists and events. As music lovers, we know how rewarding it can be to
        see your favorite artist live. We want to simplify the process of
        finding upcoming events being performed by your favorite artists.
      </p>
    </div>
  );
}
