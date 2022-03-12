const express = require('express');
const app = express();
const spotify = require('./helpers/spotify');
const querystring = require('querystring');
const url = require('url');
const fetch = require('node-fetch');
require('dotenv').config();

const PORT = 3001;

app.use('/login', (req, res, next) => {
  console.log('Attempting to log in');
  var client_id = '0939bba83f154b66900eaa7a37431b3c';
  var redirect_uri = 'http://localhost:3001/authorize';

  var state = '123456';
  var scope = 'user-library-read';

  res.redirect(
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
  params.append('redirect_uri', 'http://localhost:3001/authorize');
  params.append('grant_type', 'authorization_code');

  const newToken = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
    },
    body: params,
    json: true
  });
  const parsedTokenJSON = await newToken.json();
  const parsedToken = parsedTokenJSON.access_token;
  spotify.setToken(parsedToken);
  console.log(await spotify.retrieveFavorites(100));
  console.log("logged in: " + parsedToken);
});

app.get('/authorize', (req, res) => {
  res.sendStatus(200);
});
