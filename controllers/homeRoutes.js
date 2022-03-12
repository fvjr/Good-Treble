const router = require('express').Router();
const { Playlist, User, Event } = require('../models');

router.get('/', async (req, res) => {
  try {
    const eventsData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        // {
        //   model: Song,
        //   attributes: ['content', 'date_created'],
        // },
      ],
    });

    const events = eventsData.map((events) => events.get({ plain: true }));

    res.render('homepage', {
      events,
      //keeps track of user being logged in
      // logged_in: req.session.logged_in,
    });
    // res.status(200).json(eventsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
