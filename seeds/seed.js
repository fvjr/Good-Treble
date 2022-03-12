const sequelize = require('../config/connection');
const { User, Event, Song, Artist, Playlist } = require('../models');

const eventData = require('./eventData.json');
const userData = require('./userData.json');
const artistData = require('./artistData.json');
const songData = require('./songData.json');
const playlistData = require('./playlistData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const artists = await Artist.bulkCreate(artistData, {
    individualHooks: true,
    returning: true,
  });
  const events = await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });

  const playlists = await Playlist.bulkCreate(playlistData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
