const fetch = require('node-fetch');
const express = require('express');
//let input = require('./input.json');
//const maxVal = 800;
let oauthToken =
  '';
const trackArray = new Array();

//Sets the oauth Token
function setToken(token) {
  oauthToken = token;
}

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

//Function to parse the incoming json into just tracks and artists
//TODO return each track/artist pair as an element in an object
async function parseData(tracks) {
  const resTracks = await tracks;
  resTracks.items.forEach((listing) =>
    trackArray.push(listing.track.name + ' by ' + listing.track.artists[0].name)
  );
}

function login() {
}

exports.retrieveFavorites = retrieveFavorites;
exports.setToken = setToken;
exports.login = login;
