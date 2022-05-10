const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const Artist = require('./Artist');

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist_id: {
      type: DataTypes.STRING(255),
      references: {
        model: Artist,
        key: 'id',
      },
    },
    album_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preview_stream: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    // playlist_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'playlist',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;
