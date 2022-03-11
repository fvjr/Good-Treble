const User = require('./User');
const Playlist = require('./Playlist');
const Song = require('./Song');
const Event = require('./Event');


User.hasMany(Playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id'
});

Song.belongsTo(Playlist, {
  foreignKey: 'user_id'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Playlist, Song, Event};

