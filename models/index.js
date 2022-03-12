const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');
const Event = require('./Event');
const Artist = require('./Artist');

User.hasMany(Playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

Playlist.hasMany(Song, {
  foreignKey: 'playlist_id',
  onDelete: 'CASCADE',
});

Song.belongsTo(Playlist, {
  foreignKey: 'playlist_id',
});

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
});

Artist.hasMany(Event, {
  foreignKey: 'artist_id',
});

module.exports = { User, Playlist, Song, Event, Artist };
