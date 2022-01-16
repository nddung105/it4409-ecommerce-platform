const User = require("../../models/Users");
const httpStatus = require("../../constants/http_status");

async function show(req, res, next) {
  try {
    let user = await User.findAll();
    return res.send({ data: user });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = show;
