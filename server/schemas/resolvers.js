const { AuthenticationError } = require('apollo-server-express');
const { User, Song, Playlist, Artist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
    
    songs: async () => {
      songs = await Song.findAll(); 
      songs.forEach((song) => { song.artist_id = Artist.findOne({ where: { id: song.artist_id}})});
      return await songs;
    },

    song: async (parent, args) => {
      const song = await Song.findOne({ where: { id: args.id }})
      song.artist_id = await Artist.findOne({ where: { id: song.artist_id}});
      return song;
    },

    playlists: async () => {
      return await Playlist.findAll();
    },
    artists: async() => {
      return await Artist.findAll();
    },

    artist: async(parent, args) => {
      return await Artist.findOne({ where: { id: args.id }});
    }
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
