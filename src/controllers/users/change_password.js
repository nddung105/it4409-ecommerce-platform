const User = require("../../models/Users");
const httpStatus = require("../../constants/http_status");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../constants/constants");

async function change_password(req, res, next) {
  try {
    const { password, new_password } = req.body;
    let user = await User.findOne({ where: { id: req.userId } });
    if (user == null) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Username already exists",
      });
    }
    const vaildPassword = await bcrypt.compare(password, user.hashed_password);
    if (!vaildPassword) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Password incorrect",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_password, salt);
    const token = jwt.sign(
      {
        username: user.username,
        id: user.id,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET
    );
    user.hashed_password = hashedPassword;
    await user.save();
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      username: user.username,
      token: token,
      name: user.name,
    });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = change_password;
