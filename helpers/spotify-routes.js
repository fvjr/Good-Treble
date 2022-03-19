const express = require('express');
const app = express();
const spotify = require('./spotify');
const querystring = require('querystring');
const url = require('url');
const fetch = require('node-fetch');
require('dotenv').config();

const PORT = 3001;

app.use('/login', (req, res, next) => {
  console.log('Attempting to log in');
  var client_id = '0939bba83f154b66900eaa7a37431b3c';
  var redirect_uri = 'https://good-treble.herokuapp.com/spotify/authorize';

  var state = '123456';
  var scope = 'user-library-read';

  return res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
  next();
});

app.get('/authorize', async (req, res) => {
  var code = req.query.code || null;
  var state = req.query.state || null;

  const params = new URLSearchParams();
  params.append('code', code);
  params.append('redirect_uri', 'https://good-treble.herokuapp.com/spotify/authorize');
  params.append('grant_type', 'authorization_code');

  const newToken = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(
          process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
        ).toString('base64'),
    },
    body: params,
    json: true,
  });
  const parsedTokenJSON = await newToken.json();
  const parsedToken = parsedTokenJSON.access_token;
  spotify.setToken(parsedToken);
  console.log('TEST: ' + req.session.user_id);
  spotify.retrieveFavorites(25, req.session.user_id);
  res.redirect('https://good-treble.herokuapp.com/redirectPage');
});

app.get('/test', async (req, res) => {
  console.log(await spotify.getAllPlaylistData(req.session.user_id));
  console.log(await spotify.getArtists(req.session.user_id));
  res.sendStatus(200);
});

app.get('/authorize', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
