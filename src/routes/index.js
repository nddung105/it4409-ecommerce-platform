const express = require("express");
const mainRoute = require("./mainRoute")

const path = require("path");

const apiRouter = express.Router();

apiRouter.use("/api/v1", mainRoute);
apiRouter.use("/files/", express.static(path.join(__dirname, "../files")));

module.exports = apiRouter;