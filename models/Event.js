const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: Datatypes.String,
    },
    date_created: {
      type: Datatypes.DATE,
      allowNull: false,
      defaultValue: Datatypes.NOW,
    },
    people_going: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Event',
  }
);

module.exports = Event;
