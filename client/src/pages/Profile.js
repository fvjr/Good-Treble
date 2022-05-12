import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ArtistList from '../components/ArtistList';
import FavoriteSongs from '../components/FavoriteSongs';
import Image from 'react-bootstrap/Image';
import UserAvatar from '../components/UserAvatar';
import SpotifyImport from '../components/SpotifyImport';
import { ListGroupItem } from 'react-bootstrap';
import Navigation from '../components/Navigation';

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

  {
    SongName: 'Haunted',
    ArtistName: 'Laura Les',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d00004851e189a58c143802bd6c85ed94',
    ArtistImage:
      'https://i.scdn.co/image/ab6761610000f178fe09d2d34477616785147fdb',
    id: 5,
  },
  {
    SongName: 'mos thoser',
    ArtistName: 'food house',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048511812ebf4481cd0142857f85b',
    ArtistImage:
      'https://i.scdn.co/image/ab67616d000048511812ebf4481cd0142857f85b',
    id: 6,
  },
  {
    SongName: 'yoga (feat. Rebecca Black)',
    ArtistName: 'bbno$',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048518c25aa58d7e0894df7436348',
    ArtistImage:
      'https://i.scdn.co/image/ab6761610000f1786bca811e558018074bbc1b05',
    id: 7,
  },
  {
    SongName: 'Ghost',
    ArtistName: 'nelward',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048511cecc7242dcb36298f33b0fd',
    ArtistImage:
      'https://i.scdn.co/image/ab6761610000f178bebddf5a847f431a5ffd10f3',
    id: 8,
  },
];

let songs = [
  {
    SongName: 'Wannabe In L.A',
    ArtistName: 'Eagles Of Death Metal',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d00004851f375d1acfe9121a92b7d29bb',
    ArtistImage:
      'https://i.scdn.co/image/c5bda32bcaefd65b004fec303555900f8be53fec',
    SongID: 1,
  },
  {
    SongName: "Walk, Don't Run",
    ArtistName: 'Herb Alpert & The Tijuana Brass',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048513c893f419757910dca22bb74',
    ArtistImage:
      'https://i.scdn.co/image/2311c347d3afc41e4b1feece205908b16af31e24',
      SongID: 2,
  },
  {
    SongName: 'Benzi Box',
    ArtistName: 'DANGERDOOM',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048518f4944a3d77dd680bde9fd10',
    ArtistImage:
      'https://i.scdn.co/image/0fe2fa0d70f965b2389cf6f658ee29950a9fbf17',
      SongID: 3,
  },
  {
    SongName: "Da' Dip",
    ArtistName: 'Freak Nasty',
    AlbumImage:
      'https://i.scdn.co/image/ab67616d000048514831c1c2246ca4fd88f39f43',
    ArtistImage:
      'https://i.scdn.co/image/ab6761610000f17884871c3351c73543e3ad9dc5',
      SongID: 4,
  }
];

const styles = {
  artistDisplay: {
    margin: '5px 5px 5px 5px',
  },
  container: {
    background: 'white',
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'left',
  },
};

function Profile() {
  const [songState, setSongState] = useState(songs);
  const [artistState, setArtistState] = useState(artists)

  const searchParams = new URLSearchParams(window.location.search);
  if(searchParams.has('code')){
    console.log("Running spotifyGet");
    spotifyGet();
  } else {
    console.log('code not detected');
  }

  if(songState[0].SongID === 1){
  loadSongs(setSongState);
  }
  if(artistState[0].id === 1){
    loadArtists(setArtistState);
  }

  return (
    
    <div>
      <Container style={styles.container}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <UserAvatar />
          </ListGroup.Item>
          <ListGroup.Item>
            <SpotifyImport />
          </ListGroup.Item>
          <ListGroup.Item>
            <ArtistList artists={artistState} />
          </ListGroup.Item>
          <ListGroup.Item>
            <FavoriteSongs songs={songState} />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

async function loadSongs(stateUpdate){
  const newSongs = fetch('http://localhost:3001/spotifyTracks', {
    method: 'GET'
  }).then((response) => response.json())
  .then((data) => {
    console.log(data);
    if(data.length > 0){
    stateUpdate(data);
    }
  })
}

async function loadArtists(stateUpdate){
  const newArtists = fetch('http://localhost:3001/spotifyArtists', {
    method: 'GET'
  }).then((response) => response.json())
  .then((data) => {
    console.log(data);
    if(data.length > 0 && !(data[0] === null)){
      console.log("Update Artists");
    stateUpdate(data);
    }
  })
}

function spotifyGet(){
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  console.log(code);
  fetch(`http://localhost:3001/spotifyAPI/${code}`, {
    method: 'POST'
  });
  window.location = 'http://localhost:3000/';
}

export default Profile;
