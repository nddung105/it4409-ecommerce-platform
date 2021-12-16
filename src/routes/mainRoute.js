const express = require("express");
const productRouter = require('./products')
const commentRouter = require('./comments')
const replyRouter = require('./replies')

const mainRoute = express.Router();

mainRoute.use('/products',productRouter)
mainRoute.use('/comments',commentRouter)
mainRoute.use('/reply',replyRouter)

module.exports = mainRoute
