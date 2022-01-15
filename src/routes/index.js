const express = require("express");
const mainRoute = require("./mainRoute");

const path = require("path");

const apiRouter = express.Router();

apiRouter.use("/api/v1/", mainRoute);
apiRouter.use("/files/", express.static(path.join(__dirname, "../files")));
// apiRouter.use("/", express.static(path.join(__dirname, "../views")));
apiRouter.use(
  "/customer",
  function (req, res, next) {
    if (req.headers.authorization) {
      console.log(req.headers.authorization);
      next();
    } else {
      res.status(404).json({
        success: false,
        message: "unauthorized",
      });
    }
  },
  express.static(path.join(__dirname, "../views/customer"))
);

module.exports = apiRouter;
