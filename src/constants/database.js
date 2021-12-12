
const {DATABASE_URL} = require('../constants/constants')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {dialectOptions: {
    "ssl": {"require":true , rejectUnauthorized: false }}
  }
)

module.exports = sequelize