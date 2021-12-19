const express = require("express");
const productRouter = require('./products')
const commentRouter = require('./comments')
const replyRouter = require('./replies')
const userRouter = require('./users')

const mainRoute = express.Router();

mainRoute.use('/products',productRouter)
mainRoute.use('/comments',commentRouter)
mainRoute.use('/reply',replyRouter)
mainRoute.use('/users',userRouter)


module.exports = mainRoute
