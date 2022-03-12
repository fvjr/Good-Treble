const router = require('express').Router();
const { Playlist, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const playlistsData = await Playlist.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        // {
        //   model: Song,
        //   attributes: ['content', 'date_created'],
        // },
      ],
    });

    const playlists = playlistsData.map((playlists) =>
      playlists.get({ plain: true })
    );

    res.render('homepage', {
      playlists,
      //keeps track of user being logged in
      // logged_in: req.session.logged_in,
    });
    // res.status(200).json(playlistsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
