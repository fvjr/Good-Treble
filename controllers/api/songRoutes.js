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

//get single song
//http://localhost:3001/api/songs/:id
router.get('/:id', async (req, res) => {
  try {
    const songData = await Song.findByPk(req.params.id);
    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
