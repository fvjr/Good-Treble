const express = require('express');
const app = express();
const spotify = require('../../helpers/spotify');
const querystring = require('querystring');
const url = require('url');
const fetch = require('node-fetch');
require('dotenv').config();
const router = require('express').Router();
const { Playlist, User } = require('../../models');
const withAuth = require('../../utils/auth');
const songdata = require('../../helpers/spotify');

//http://localhost:3001/api/playlists
router.get('/:id', async (req, res) => {
  try {
    const playlistData = await songdata.getAllPlaylistData(req.params.id);

    res.render('playlist', {
      songs: playlistData[0],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/playlists
router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll();
    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//add a playlist to the playlist page
router.get('/', withAuth, async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const playlists = playlistData.map((playlist) =>
      project.get({ plain: true })
    );

    res.render('playlists', {
      playlists,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//log into spotify
app.post('/login', (req, res, next) => {
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

module.exports = router;
