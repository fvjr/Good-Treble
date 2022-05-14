const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

const apiRoutes = require('./api');
const spotify = require('../helpers/spotify-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
