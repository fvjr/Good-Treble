const { Playlist, Song } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Song {

}

Song.init(
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
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newSongData) => {
        newSongData.password = await bcrypt.hash(newSongData.password, 10);
        return newSongData;
      },
      beforeUpdate: async (updatedSongData) => {
        updatedSongData.password = await bcrypt.hash(updatedSongData.password, 10);
      },
    },
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;