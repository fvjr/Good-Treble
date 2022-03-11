const fetch = require("node-fetch");
//let input = require('./input.json');
//const maxVal = 800;
let oauthToken = "BQB2USEXeEyPhK96w_4LIPrEPM7r79y1HnAXO8rB763V3cmGJ1b7tdjs2fFmHjPQVv71F0NZthfjzueXH7DpktZpOqxsiBuU0P_C2-dl22wGRZRRaN1CtoNk1KhtbyFlZknajWqNPkKjyFZK4ArLUouigVa_RLUnNDJ5yhRVKopj0mT3-b6DWSlInbHRohyq-qQ"
const trackArray = new Array();

//Sets the oauth Token
function setToken(token){
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
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${oauthToken}`,
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
    trackArray.push(listing.track.name + " by " + listing.track.artists[0].name)
  );
}

exports.retrieveFavorites = retrieveFavorites;