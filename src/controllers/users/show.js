const User = require("../../models/Users");
const httpStatus = require("../../constants/http_status");

async function show(req, res, next) {
  try {
    let user = await User.findOne({ where: { id: req.userId } });
    if (user == null) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "User not found",
      });
    } else {
      return res.status(httpStatus.OK).json({
        id: user.id,
        username: user.username,
        name: user.name,
        avatar: user.avatar,
        phonenumber: user.phonenumber,
        role: user.role,
      });
    }
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = show;
