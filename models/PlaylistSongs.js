const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlaylistSongs extends Model {}

PlaylistSongs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'playlist',
        key: 'id',
      },
    },
    song_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
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
