const Order = require("../../models/Order");
const httpStatus = require("../../constants/http_status");

async function show(req, res, next) {
  try {
    let order = await Order.findAll({where: {user_id: req.userId}})
    return res.send({data: order})
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = show;
