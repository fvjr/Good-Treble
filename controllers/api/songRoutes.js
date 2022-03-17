const router = require('express').Router();
const { Song } = require('../../models');

//get all songs
router.get('/', async (req, res) => {
  try {
    const songData = await Song.findAll();
    res.json(songData);
    // res.render('songs', songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
