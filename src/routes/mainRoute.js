const express = require("express");
const productRouter = require('./products')

const mainRoute = express.Router();

mainRoute.use('/products',productRouter)
  
module.exports = mainRoute
