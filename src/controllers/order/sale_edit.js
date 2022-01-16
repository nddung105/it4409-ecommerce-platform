const Order = require("../../models/Order");
const httpStatus = require("../../constants/http_status");

async function sale_edit(req, res, next) {
  try {
    const { id, status } = req.body;
    let order = await Order.findOne({ where: { id: id } });
    if (order) {
      order.status = status;
      await order.save();
      return res.status(httpStatus.CREATED).json({
        id: order.id,
        address: order.address,
        full_name: order.full_name,
        phone_number: order.full_name,
        note: order.note,
        user_id: order.user_id,
        status: order.status,
        total_money: order.total_money,
      });
    } else {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "UNAUTHORIZED",
      });
    }
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = sale_edit
