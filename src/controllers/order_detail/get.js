const OrderDetail = require("../../models/OrderDetail");
const httpStatus = require("../../constants/http_status");

async function get(req, res, next) {
  try {
    const order_id = req.params.order_id;
    if (order_id) {
      let order_detail = await OrderDetail.findAll({
        where: { order_id: order_id },
      });
      res.send({ data: order_detail });
    } else {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "data empty",
      });
    }
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = get;
