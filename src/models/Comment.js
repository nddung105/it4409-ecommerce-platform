const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../constants/database");

class Comment extends Model {}

Comment.init(
  {
    // Model attributes are defined here
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id:{
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "comment", // We need to choose the model name
    // don't forget to enable timestamps!
    timestamps: false,

    // I don't want createdAt
    createdat: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedat: false,
  }
);

module.exports = Comment