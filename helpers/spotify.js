const fetch = require('node-fetch');
const express = require('express');
const Song = require('../models/Song');
const Artist = require('../models/Artist');
const req = require('express/lib/request');
const { Playlist } = require('../models');
const PlaylistSongs = require('../models/PlaylistSongs');
const { sequelize } = require('../models/PlaylistSongs');
//let input = require('./input.json');
//const maxVal = 800;
let oauthToken = '';
const trackArray = new Array();

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
  for (i = 0; i < maxVal; i += 50) {
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
    `https://api.spotify.com/v1/me/tracks?offset=${index}&limit=25`,
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
  userID
) {
  console.log(userID);
  const findPlaylist = await Playlist.findOrCreate({
    where: { id: userID, name: 'Liked Songs', user_id: userID },
  });
  const findArtist = await Artist.findOrCreate({
    where: { id: ArtistID, name: ArtistName },
  });
  const findSong = await Song.findOrCreate({
    where: { id: SongID, name: SongName, artist_id: ArtistID },
  });
  const findPlaylistSong = await PlaylistSongs.findOrCreate({
    where: { playlist_id: userID, song_id: SongID },
  });
}

/**
 * Exported function to retrieve JSON of database information
 * @param {int} playlist_id: id of playlist to get data from. Should be identical to req.session.user_id
 */
async function getAllPlaylistData(playlist_id) {
  const arrayData =
    await sequelize.query(`SELECT song.name AS SongName, artist.name AS ArtistName FROM playlist
  INNER JOIN playlist_songs ON playlist.id = playlist_songs.playlist_id
  INNER JOIN song ON playlist_songs.song_id = song.id
  INNER JOIN artist ON song.artist_id = artist.id
  WHERE playlist.id = ${playlist_id}`);
  return arrayData;
}

async function getArtists(playlist_id) {
  const arrayData =
    await sequelize.query(`SELECT DISTINCT artist.name, COUNT(song.id) AS SONGS FROM artist
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
