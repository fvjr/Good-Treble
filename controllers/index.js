const router = require('express').Router();

const apiRoutes = require('./api');
const spotify = require('../helpers/spotify-routes');

router.use('/api', apiRoutes);
router.use('/spotify', spotify);

module.exports = router;
