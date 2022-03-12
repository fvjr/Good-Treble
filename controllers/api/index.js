const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/events', eventRoutes);
router.use('/users', userRoutes);

module.exports = router;
