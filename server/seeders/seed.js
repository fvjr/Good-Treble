const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

db.sync('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('User information seeded.');
  process.exit(0);
});
