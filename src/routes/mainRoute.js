const express = require("express");
const productRouter = require("./products");
const commentRouter = require("./comments");
const replyRouter = require("./replies");
const userRouter = require("./users");
const orderRouter = require("./order");
const orderDetailRouter = require("./orderDetail");

const mainRoute = express.Router();

mainRoute.use("/products", productRouter);
mainRoute.use("/comments", commentRouter);
mainRoute.use("/reply", replyRouter);
mainRoute.use("/users", userRouter);
mainRoute.use("/order", orderRouter);
mainRoute.use("/order_detail", orderDetailRouter);

module.exports = mainRoute;
