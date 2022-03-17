const router = require('express').Router();
const { Playlist, User, Event, Artist, Song } = require('../models');
const withAuth = require('../utils/auth');

router.get('/events', withAuth, async (req, res) => {
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

    res.render('events', {
      events,
      //keeps track of user being logged in
      logged_in: req.session.logged_in,
    });
    // res.status(200).json(eventsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/events/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Artist,
          attributes: ['name'],
        },
      ],
    });

    const event = eventData.get({ plain: true });
    res.render('event', {
      ...event,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
// Use withAuth middleware to prevent access to route
router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event, Song }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

//go to login screen, default landing page
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/whyGoodTreble', async (req, res) => {
  try {
    res.render('whyGoodTreble');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
