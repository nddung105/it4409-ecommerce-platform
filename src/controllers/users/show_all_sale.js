const User = require("../../models/Users");
const httpStatus = require("../../constants/http_status");
const { ROLE_SALE} = require("../../constants/constants");

async function show(req, res, next) {
  try {
    let user = await User.findAll({
      where: {
        role: ROLE_SALE,
      },
    });
    return res.send({ data: user });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = show;
