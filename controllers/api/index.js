const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const playlistRoutes = require('./playlistRoutes');
const songRoutes = require('./songRoutes');
const playlistsongsRoutes = require('./playlistsongsRoutes');

router.use('/events', eventRoutes);
router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);
router.use('/songs', songRoutes);
router.use('/playlistsongs', playlistsongsRoutes);

module.exports = router;
