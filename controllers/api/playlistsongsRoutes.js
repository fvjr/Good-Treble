const router = require('express').Router();
const { Playlist, Song, PlaylistSongs } = require('../../models');

//get all playlistsongs
router.get('/', async (req, res) => {
  try {
    const playlistsongData = await PlaylistSongs.findAll();
    res.json(playlistsongData);
    // res.render('songs', songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//testing route, combine songs info with playlist songs info
router.get('/test', async (req, res) => {
  try {
    const playlistsongsData = await PlaylistSongs.findAll({
      include: [
        {
          model: Song,
          through: Playlist,
        },
      ],
    });

    // Serialize data so the template can read it
    const playlistsongs = playlistsongsData.map((playlistsongs) =>
      playlistsongs.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      playlistsongs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
