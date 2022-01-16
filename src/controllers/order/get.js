const Order = require("../../models/Order");
const httpStatus = require("../../constants/http_status");

async function get(req, res, next) {
  try {
    const order_id = req.params.order_id;
    if (order_id) {
      let order_detail = await Order.findOne({ where: { id: order_id } });
      if (req.userId == order_detail.user_id) {
        return res.status(httpStatus.CREATED).json({
          id: order_detail.id,
          address: order_detail.address,
          full_name: order_detail.full_name,
          phone_number: order_detail.full_name,
          note: order_detail.note,
          user_id: order_detail.user_id,
          status: order_detail.status,
          total_money: order_detail.total_money,
        });
      }
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
