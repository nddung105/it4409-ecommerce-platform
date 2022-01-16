const { Sequelize, DataTypes, Model } = require("sequelize");
const constant = require("../constants/constants");
const sequelize = require("../constants/database");

class OrderDetail extends Model {}

OrderDetail.init(
  {
    // Model attributes are defined here
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "orders",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
    total_money: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "oderdetail", // We need to choose the model name
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: true,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: "updateTimestamp",
  }
);

module.exports = OrderDetail;
