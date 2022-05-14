const sequelize = require('../config/connection');
const { User } = require('../models');
const userData = require('./userSeeds.json');

// sequelize.sync('open', async () => {
//   try {
//     await User.deleteMany({});
//     await User.create(userSeeds);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('User information seeded.');
//   process.exit(0);
// });

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(users);
  process.exit(0);
};

seedDatabase();
