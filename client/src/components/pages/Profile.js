import React from 'react';
import '../../styles/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ArtistList from '../ArtistList';

const artists = [
  {
    SongName: 'Wannabe In L.A',
    ArtistName: 'Eagles Of Death Metal',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d00004851f375d1acfe9121a92b7d29bb',
    ArtistImage:
      'https://i.scdn.co/image/c5bda32bcaefd65b004fec303555900f8be53fec',
    id: 1,
  },
  {
    SongName: "Walk, Don't Run",
    ArtistName: 'Herb Alpert & The Tijuana Brass',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048513c893f419757910dca22bb74',
    ArtistImage:
      'https://i.scdn.co/image/2311c347d3afc41e4b1feece205908b16af31e24',
    id: 2,
  },
  {
    SongName: 'Benzi Box',
    ArtistName: 'DANGERDOOM',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10',
    ArtistImage:
      'https://i.scdn.co/image/0fe2fa0d70f965b2389cf6f658ee29950a9fbf17',
    id: 3,
  },
  {
    SongName: "Da' Dip",
    ArtistName: 'Freak Nasty',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048514831c1c2246ca4fd88f39f43',
    ArtistImage:
      'https://i.scdn.co/image/ab6761610000f17884871c3351c73543e3ad9dc5',
    id: 4,
  },
];

const styles = {
  artistDisplay: {
    margin: '5px 5px 5px 5px',
  },
};

function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <h1>USERNAME HERE!!!</h1>
          <h2>YOUR PROFILE</h2>
          <header className="display-flex justify-space-between align-center p-2">
            <h1></h1>
            <h3>
              Let's get your Spotify songs imported! Click the "Import Songs"
              button to import some of your recent favorites! To start, we'll
              import 25 of your most recently liked songs.
            </h3>
            <a href="">
              <button id="button-spotify-import">Import Songs</button>
            </a>
          </header>
        </Row>
        <ArtistList artists={artists} />
        <Row>Favorite Songs</Row>
      </Container>
    </div>
  );
}

export default Profile;
