const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Song {
    id: ID
    name: String
    artist_id: Artist
    album_image: String
    preview_stream: String
  }

  type Artist {
    id: ID
    name: String
    image: String
    songs: [Song]
  }

  type Playlist {
    id: ID
    songs: [Song]
    name: String
    user_id: ID
  }

  type PlaylistSong {
    playlist_id: ID
    song_id: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(name: String): User
    songs: [Song]
    song(id: ID): Song
    playlists: [Playlist]
    playlist(_id: String): Playlist
    artists: [Artist]
    artist(id: ID): Artist
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
