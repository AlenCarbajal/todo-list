const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 255;

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: true,
        len: [MIN_NAME_LENGTH, MAX_NAME_LENGTH]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    hashedPassword: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        is: /^[0-9a-f]{64}$/i,
      }
    }
  },

);

module.exports = User;