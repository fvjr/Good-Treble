const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');
const Event = require('./Event');
const Artist = require('./Artist');
const PlaylistSongs = require('./PlaylistSongs');

//user can have multiple playlists
User.hasMany(Playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

//playlist belongs to the user that created it
Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

//playlist can have manysongs
Playlist.hasMany(Song, {
  foreignKey: 'playlist_id',
  onDelete: 'CASCADE',
});

//song belongs to one play list
Song.belongsTo(Playlist, {
  foreignKey: 'playlist_id',
});

//users can have multiple events they're going to
User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

//an event is created by one user
Event.belongsTo(User, {
  foreignKey: 'user_id',
});

//artists can have multiple events
Artist.hasMany(Event, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE',
});

//one event belongs to one artist
Event.belongsTo(Artist, {
  foreignKey: 'artist_id',
});

Artist.hasMany(Song, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE',
});

Song.belongsTo(Artist, {
  foreignKey: 'artist_id',
});

module.exports = { User, Playlist, Song, Event, Artist, PlaylistSongs };
