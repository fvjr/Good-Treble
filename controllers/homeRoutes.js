const router = require('express').Router();
const {
  Playlist,
  User,
  Event,
  Artist,
  Song,
  PlaylistSongs,
} = require('../models');
const spotify = require('../helpers/spotify-routes');
router.use('/spotify', spotify);
const withAuth = require('../utils/auth');
const songdata = require('../helpers/spotify');

//works
// auth protected route to homepage (main page for user)
router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event, Song, PlaylistSongs }],
    });

    const returnedSongs = await songdata.getAllPlaylistData(
      req.session.user_id
    );
    console.log(returnedSongs);
    res.render('homepage', {
      songs: returnedSongs,
      name: userData.name,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event, Song, PlaylistSongs }],
    });

    const returnedSongs = await songdata.getAllPlaylistData(
      req.session.user_id
    );
    console.log(returnedSongs[0]);
    res.render('profile', {
      songs: returnedSongs[0],
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/redirectPage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event, Song, PlaylistSongs }],
    });

    res.render('redirectPage', {
      userData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//playlist route
router.get('/playlists', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const playlistData = await Playlist.findAll({
      include: [{ model: User, Event, Song, PlaylistSongs }],
    });

    const playlists = playlistData.map((playlist) =>
      playlist.get({ plain: true })
    );
    res.render('playlists', {
      playlists,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//logs existing user in
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  res.render('login');
});

//go to login screen, default page for website
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

//direct to info on website
router.get('/whyGoodTreble', async (req, res) => {
  try {
    res.render('whyGoodTreble');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
