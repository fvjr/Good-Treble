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
    console.log(returnedSongs[0]);
    res.render('homepage', {
      songs: returnedSongs[0],
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const playlistsongData = await PlaylistSongs.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Event,
        },
      ],
    });

    // Serialize data so the template can read it
    const playlistsongs = playlistsongData.map((playlistsong) =>
      playlistsong.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('profile', {
      playlistsongs,
      logged_in: req.session.logged_in,
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
