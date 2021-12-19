const { Sequelize, DataTypes, Model } = require("sequelize");
const constant = require("../constants/constants");
const sequelize = require("../constants/database");

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    role: {
      type: DataTypes.STRING,
      // allowNull: false,
      defaultValue: constant.ROLE_CUSTOMER,
      validate: {
        isIn: [
          [constant.ROLE_ADMIN, constant.ROLE_CUSTOMER, constant.ROLE_SALE],
        ],
      },
      // allowNull defaults to true
    },
    phonenumber: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    avatar: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "user", // We need to choose the model name
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: true,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: "updateTimestamp",
  }
);

module.exports = User;
