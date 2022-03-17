const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlaylistSongs extends Model {}

PlaylistSongs.init(
  {
    playlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'playlist',
        key: 'id',
      },
      primaryKey: true,
    },
    song_id: {
      type: DataTypes.STRING(512),
      references: {
        model: 'song',
        key: 'id',
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist_songs',
  }
);

module.exports = PlaylistSongs;
