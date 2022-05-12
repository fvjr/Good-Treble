const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const Artist = require('./Artist');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      allowNull: false,
    },
    fav1: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav2: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav3: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav4: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav5: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav6: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav7: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
    fav8: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: Artist,
        key: Artist.id,
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
