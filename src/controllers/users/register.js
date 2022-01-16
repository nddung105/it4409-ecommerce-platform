const jwt = require("jsonwebtoken");
const User = require("../../models/Users");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../../constants/constants");
const httpStatus = require("../../constants/http_status");

async function register(req, res, next) {
  try {
    const { username, password, name } = req.body;
    console.log(username);
    let user = await User.findOne({ where: { username: username } });
    if (user) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Username already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      user = User.build({
        username: username,
        hashed_password: hashedPassword,
        name: name,
      });
      //   await user.save();
      const token = jwt.sign(
        {
          username: user.username,
          id: user.id,
          name: user.name,
          role: user.role,
        },
        JWT_SECRET
      );
      await user.save();
      return res.status(httpStatus.CREATED).json({
        id: user.id,
        username: user.username,
        name: user.name,
        token: token,
        role: user.role,
      });
    } catch (e) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: e.message,
      });
    }
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = register;
