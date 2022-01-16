const { Sequelize, DataTypes, Model } = require("sequelize");
const constant = require("../constants/constants");
const sequelize = require("../constants/database");

class Order extends Model {}

Order.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    status: {
      type: DataTypes.STRING,
      // allowNull: false,
      defaultValue: constant.ODER_PROCESSING,
      validate: {
        isIn: [
          [constant.ODER_PROCESSING, constant.ODER_CANCEL, constant.ODER_PROCESSED],
        ],
      },
      // allowNull defaults to true
    },
    total_money: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "order", // We need to choose the model name
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: true,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: "updateTimestamp",
  }
);

module.exports = Order;
