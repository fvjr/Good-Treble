const express = require('express');
const app = express();
const spotify = require('./helpers/spotify');
const querystring = require('querystring');
const url = require('url');
const fetch = require('node-fetch');
require('dotenv').config();

async function getData() {
  const outputArray = await spotify.retrieveFavorites(800);
  console.log(outputArray);
}

const PORT = 3001;

app.get('/', (req, res) => res.sendStatus(200));

app.use('/login', (req, res, next) => {
  console.log('Attempting to log in');
  var client_id = '0939bba83f154b66900eaa7a37431b3c';
  var redirect_uri = 'https://spotify-upenn-test.herokuapp.com/authorize';

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
  console.log(code);

  let credentials = {
    'code': code,
    'redirect_uri': 'https://spotify-upenn-test.herokuapp.com/',
    'grant_type': 'authorization_code'
  }

  let formBody = [];
  for (var entry in credentials){
    let encodedKey = encodeURIComponent(entry);
    let encodedValue = encodeURIComponent(credentials[entry]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join("&");

  console.log(formBody);

  const newToken = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody,
    json: true
  });
  console.log(newToken);
});

app.get('/authorize', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
