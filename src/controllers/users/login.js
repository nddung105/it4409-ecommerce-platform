const jwt = require("jsonwebtoken");
const User = require("../../models/Users");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../../constants/constants");
const httpStatus = require("../../constants/http_status");

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ where: { username: username } });

    if (!user) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Username or password incorrect",
      });
    }

    const vaildPassword = bcrypt.compare(password, user.hashed_password);
    if (!vaildPassword) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Username or password incorrect",
      });
    }

    const token = jwt.sign(
      {
        username: username,
        id: user.id,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET
    );

    if (user.role == ""){
        // send index.html for Role
    }
    
    return res.status(httpStatus.OK).json({
      id: user.id,
      username: username,
      name: user.name,
      token: token,
    });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = login;
