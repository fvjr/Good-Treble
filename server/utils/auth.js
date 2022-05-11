const jwt = require('jsonwebtoken');

// const secret = 'NtYDMDbqnmPby0H';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, process.env.SECRET, {
      expiresIn: expiration,
    });
  },
};
