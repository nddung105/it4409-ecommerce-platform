const jwt = require("jsonwebtoken");
const httpStatus = require("../constants/http_status");
const { ROLE_ADMIN, ROLE_CUSTOMER, ROLE_SALE } = require("../constants/constants");
const { JWT_SECRET } = require("../constants/constants");

const validJWT = async (req, res, next) => {
  try {
    if (req.headers["authorization"]) {
      try {
        let authorization = req.headers["authorization"].split(" ");
        if (authorization[0] !== "Bearer") {
          return res.status(httpStatus.UNAUTHORIZED).json({
            message: "UNAUTHORIZED",
          });
        } else {
          req.jwt = jwt.verify(authorization[1], JWT_SECRET, (err, payload) => {
            if (err) {
              return res.status(httpStatus.UNAUTHORIZED).json({
                message: "UNAUTHORIZED",
              });
            } else {
              req.userId = payload.id;
              return next();
            }
          });
        }
      } catch (err) {
        return res.status(httpStatus.FORBIDDEN).json({
          message: err.message,
        });
      }
    } else {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "UNAUTHORIZED",
      });
    }
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

const validJWTCustomer = async (req, res, next) => {
  try {
    if (req.headers["authorization"]) {
      try {
        let authorization = req.headers["authorization"].split(" ");
        if (authorization[0] !== "Bearer") {
          return res.status(httpStatus.UNAUTHORIZED).json({
            message: "UNAUTHORIZED",
          });
        } else {
          req.jwt = jwt.verify(authorization[1], JWT_SECRET, (err, payload) => {
            if (err) {
              return res.status(httpStatus.UNAUTHORIZED).json({
                message: "UNAUTHORIZED",
              });
            } else {
              if (payload.role === ROLE_CUSTOMER) {
                req.userId = payload.id;
                return next();
              } else {
                return res.status(httpStatus.FORBIDDEN).json({
                  message: "FORBIDDEN",
                });
              }
            }
          });
        }
      } catch (err) {
        return res.status(httpStatus.FORBIDDEN).json({
          message: err.message,
        });
      }
    } else {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "UNAUTHORIZED",
      });
    }
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

const validJWTAdmin = async (req, res, next) => {
  try {
    if (req.headers["authorization"]) {
      try {
        let authorization = req.headers["authorization"].split(" ");
        if (authorization[0] !== "Bearer") {
          return res.status(httpStatus.UNAUTHORIZED).json({
            message: "UNAUTHORIZED",
          });
        } else {
          req.jwt = jwt.verify(authorization[1], JWT_SECRET, (err, payload) => {
            if (err) {
              return res.status(httpStatus.UNAUTHORIZED).json({
                message: "UNAUTHORIZED",
              });
            } else {
              if (payload.role === ROLE_ADMIN) {
                req.userId = payload.id;
                return next();
              } else {
                return res.status(httpStatus.FORBIDDEN).json({
                  message: "FORBIDDEN",
                });
              }
            }
          });
        }
      } catch (err) {
        return res.status(httpStatus.FORBIDDEN).json({
          message: err.message,
        });
      }
    } else {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "UNAUTHORIZED",
      });
    }
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

const validJWTSale = async (req, res, next) => {
  try {
    if (req.headers["authorization"]) {
      try {
        let authorization = req.headers["authorization"].split(" ");
        if (authorization[0] !== "Bearer") {
          return res.status(httpStatus.UNAUTHORIZED).json({
            message: "UNAUTHORIZED",
          });
        } else {
          req.jwt = jwt.verify(authorization[1], JWT_SECRET, (err, payload) => {
            if (err) {
              return res.status(httpStatus.UNAUTHORIZED).json({
                message: "UNAUTHORIZED",
              });
            } else {
              if (payload.role === ROLE_ADMIN || payload.role === ROLE_SALE) {
                req.userId = payload.id;
                return next();
              } else {
                return res.status(httpStatus.FORBIDDEN).json({
                  message: "FORBIDDEN",
                });
              }
            }
          });
        }
      } catch (err) {
        return res.status(httpStatus.FORBIDDEN).json({
          message: err.message,
        });
      }
    } else {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "UNAUTHORIZED",
      });
    }
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

module.exports = {
  validJWTAdmin,
  validJWTCustomer,
  validJWT,
  validJWTSale
};
