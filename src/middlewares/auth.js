const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const httpStatus = require("../constants/http_status");

const auth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "unauthorized",
      });
    }
    let authorization = req.headers.authorization.split(" ")[1],
      decoded;
    try {
      decoded = jwt.verify(authorization, process.env.JWT_SECRET);
    } catch (e) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "unauthorized",
      });
    }
    const userId = decoded.id;
    let user;
    try {
      user = await User.findOne({ where: { id: userId } });
      if (user == null) {
        return res.status(httpStatus.UNAUTHORIZED).json({
          message: "UNAUTHORIZED",
        });
      }
    } catch (error) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }

    req.userId = userId;
    next();
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

module.exports = auth;
