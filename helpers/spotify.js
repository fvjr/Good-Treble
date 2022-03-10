const fetch = require("node-fetch");
//let input = require('./input.json');
const maxVal = 800;
const oauthToken = "BQAezKTkq4sDnHxCAmSyNbzPfU3kiLqREBU98XFGWCbyGMQNvRi3OFlDNN9CT-ppWqxn5SXadPLJQPzggo7jN-jarWaVn_mY5WWrX3YBQD1wzVLZEaxNrUZ-n9BJIxUM02Tv46MKrcEVnIAS2HoSCupf7xOD-2gjRL7gUIjryBVFVxc8WL0SMVoTKPEl6HQBAbk"

for (i = 0; i < maxVal; i += 50) {
  const formattedData = getData(i);
  parseData(formattedData);
}

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

async function parseData(tracks) {
  const resTracks = await tracks;
  resTracks.items.forEach((listing) =>
    console.log(listing.track.name + " by " + listing.track.artists[0].name)
  );
}
