const router = require('express').Router();
const eventRoutes = require('./eventRoutes');

router.use('/events', eventRoutes);

module.exports = router;
