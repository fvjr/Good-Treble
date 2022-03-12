const router = require('express').Router();
const { Playlist } = require('../../models');

//http://localhost:3001/api/playlists
router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll();
    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
