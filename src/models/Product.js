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
      allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
      },
    image_link:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'updated_at',
      allowNull: false
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "products", // We need to choose the model name
    // don't forget to enable timestamps!
    timestamps: false,
  }
);

module.exports = Product