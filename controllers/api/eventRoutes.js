const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

//get all events
//http://localhost:3001/api/events
// router.get('/', async (req, res) => {
//   try {
//     const eventData = await Event.findAll();

//     // res.status(200).json(eventData);
//     res.render('events');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll();

    res.render('events', eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get single event
//http://localhost:3001/api/events/:id
router.get('/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//make an event
//http://localhost:3001/api/events
router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete an event
//http://localhost:3001/api/events
router.delete('/:id', async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this ID.' });
      return;
    }
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
