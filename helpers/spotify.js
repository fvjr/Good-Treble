const fetch = require('node-fetch');
const express = require('express');
const Song = require('../models/Song');
const Artist = require('../models/Artist');
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
 * @returns Array:String of favorite songs in format "{nameOfSong} by {nameOfFirstArtist}""
 */
async function retrieveFavorites(maxVal) {
  for (i = 0; i < maxVal; i += 50) {
    const formattedData = await getData(i);
    parseData(formattedData);
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
async function parseData(tracks) {
  const resTracks = await tracks;
  resTracks.items.forEach((listing) =>
    //trackArray.push(listing.track.name + ' by ' + listing.track.artists[0].name)
    writeSongToDatabase(
      listing.track.artists[0].id,
      listing.track.artists[0].name,
      listing.track.id,
      listing.track.name
    )
  );
}

//Function actually writes songs/artists to database
//TODO: Include playlist/song lookup table in queries
async function writeSongToDatabase(ArtistID, ArtistName, SongID, SongName) {
  const findArtist = await Artist.findOrCreate({
    where: { id: ArtistID, name: ArtistName },
  });
  const findSong = await Song.findOrCreate({
    where: { id: SongID, name: SongName, artist_id: ArtistID },
  });
}

exports.retrieveFavorites = retrieveFavorites;
exports.setToken = setToken;
