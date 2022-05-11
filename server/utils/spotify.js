const fetch = require('node-fetch');
const express = require('express');
const req = require('express/lib/request');
const { Playlist, User, PlaylistSongs, Song, Artist } = require('../../models');
//const PlaylistSongs = require('../../models/PlaylistSongs');
//const { sequelize } = require('../../models/PlaylistSongs');
const sequelize = require('../config/connection');
//let input = require('./input.json');
//const maxVal = 800;
let oauthToken = '';
const trackArray = [];

//Sets the oauth Token
function setToken(token) {
  oauthToken = token;
}

/**
 * Handles retrieving favorite songs from spotify. Requires setToken to be invoked first.
 * @param {int} maxVal how many songs to return
 * @param {string} userID the user id to assign to the songs
 * @returns Array:String of favorite songs in format "{nameOfSong} by {nameOfFirstArtist}""
 */
async function retrieveFavorites(maxVal, userID) {
  for (let i = 0; i < maxVal; i += 50) {
    const formattedData = await getData(i);
    parseData(formattedData, userID);
  }
  return trackArray;
}

//Handles retrieving data from spotify api
//Will automatically pull 50 songs from the user's favorite songs
//Beginning at the specified index
async function getData(index) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/tracks?offset=${index}&limit=50`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${oauthToken}`,
      },
    }
  );
  return res.json();
}

//Function to parse the incoming json into SQL database
async function parseData(tracks, userID) {
  const resTracks = await tracks;
  resTracks.items.forEach((listing) =>
    //trackArray.push(listing.track.name + ' by ' + listing.track.artists[0].name)
    writeSongToDatabase(
      listing.track.artists[0].id,
      listing.track.artists[0].name,
      listing.track.id,
      listing.track.name,
      listing.track.album.images[2].url,
      listing.track.preview_url,
      userID
    )
  );
}

//Function actually writes songs/artists to database
async function writeSongToDatabase(
  ArtistID,
  ArtistName,
  SongID,
  SongName,
  AlbumImage,
  PreviewStream,
  userID
) {
  let nameHolder = await User.findByPk(userID);
  let nameString = nameHolder.dataValues.name;
  const findPlaylist = await Playlist.findOrCreate({
    where: { id: userID, name: `${nameString}'s Liked Songs`, user_id: userID },
  });

  const ArtistImage = await getArtistImage(ArtistID);

  const findArtist = await Artist.findOrCreate({
    where: { id: ArtistID, name: ArtistName , image: ArtistImage},
  });

  const findSong = await Song.findOrCreate({
    where: {
      id: SongID,
      name: SongName,
      artist_id: ArtistID,
      album_image: AlbumImage,
      preview_stream: PreviewStream,
    },
  });
  const findPlaylistSong = await PlaylistSongs.findOrCreate({
    where: { playlist_id: userID, song_id: SongID },
  });
}

//Retrieves a user's most listened to track on spotify
async function getTopTrackArt(user_id){
  const res = await fetch(
    `	https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=long_term`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${oauthToken}`,
      },
    }
  );
  
  //return res.json();
  const data = await res.json();
  const avatar = data.items[0].album.images[1].url;
  const currentAvatar = await sequelize.query(`SELECT avatar FROM user WHERE id = ${user_id}`);
  if(currentAvatar != "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"){
  const importedAvatar = await sequelize.query(`UPDATE user SET avatar = "${avatar}" WHERE id = ${user_id}`);
  }
  console.log("Updated Avatar");
}

//When given an artistID, returns a link to a 160x160 image of the artist
async function getArtistImage(artistID) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${artistID}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${oauthToken}`,
      },
    }
  );
  const artistJSON = await res.json();
  return artistJSON.images[2].url;
}

async function getTopArtists(userID){
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=8`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${oauthToken}`,
      },
    }
  );
  let index = 1;
  const artistJSON = await res.json();
  console.log(artistJSON);
  for(artist of artistJSON.items){
    const artistHolder = await Artist.findOrCreate({ where: {id: artist.id, name: artist.name, image: artist.images[2].url}});
    sequelize.query(`UPDATE user SET fav${index} = "${artist.id}" WHERE id = ${userID}`);
    index++;
  };
}

/**
 * Exported function to retrieve JSON of database information
 * @param {int} playlist_id: id of playlist to get data from. Should be identical to req.session.user_id
 */
async function getAllPlaylistData(playlist_id) {
  const arrayData =
    await sequelize.query(`SELECT song.id AS SongID, song.name AS SongName, artist.name AS ArtistName, song.album_image AS AlbumImage, song.preview_stream AS PreviewStream, artist.image AS ArtistImage FROM playlist
  INNER JOIN playlist_songs ON playlist.id = playlist_songs.playlist_id
  INNER JOIN song ON playlist_songs.song_id = song.id
  INNER JOIN artist ON song.artist_id = artist.id
  WHERE playlist.id = ${playlist_id}`);
  //console.log("------- Begin JSON DATA -------");
  //console.log(arrayData[0]);
  //console.log("-------- End JSON Data --------");
  return arrayData[0];
}

async function getArtists(playlist_id) {
  const arrayData =
    await sequelize.query(`SELECT DISTINCT artist.name, artist.image AS ArtistImage, COUNT(song.id) AS SONGS FROM artist
  INNER JOIN song ON song.artist_id = artist.id
  INNER JOIN playlist_songs ON playlist_songs.song_id = song.id
  INNER JOIN playlist ON playlist.id = playlist_songs.playlist_id
  WHERE playlist.id = ${playlist_id}
  GROUP BY artist.name
  ORDER BY SONGS DESC`);
  return arrayData;
}

exports.getArtists = getArtists;
exports.getAllPlaylistData = getAllPlaylistData;
exports.retrieveFavorites = retrieveFavorites;
exports.setToken = setToken;
exports.getTopTrackArt = getTopTrackArt;
exports.getTopArtists = getTopArtists;
