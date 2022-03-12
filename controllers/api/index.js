const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const playlistRoutes = require('./playlistRoutes');

router.use('/events', eventRoutes);
router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);

module.exports = router;
