const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({
        name,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          'Sorry, no user has been found with this email address or password. Please try again.'
        );
      }
      const validPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError(
          'Incorrect username or password - please try again.'
        );
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
