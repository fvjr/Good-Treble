const router = require('express').Router();
const { Playlist, User, Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
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

//
// Use withAuth middleware to prevent access to route
router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event }],
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

module.exports = router;
