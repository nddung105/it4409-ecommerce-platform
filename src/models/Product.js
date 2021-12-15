const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/database");

class Product extends Model {}

Product.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      // allowNull defaults to true
    },
    category: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    brand: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    description: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },

  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "product", // We need to choose the model name
    // don't forget to enable timestamps!
    timestamps: false,

    // I don't want createdAt
    createdat: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedat: false,
  }
);

module.exports = Product