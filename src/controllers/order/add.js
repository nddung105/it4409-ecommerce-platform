const Order = require("../../models/Order");
const httpStatus = require("../../constants/http_status");

async function add(req, res, next) {
  try {
    const { user_id, address, full_name, phone_number, note } = req.body;
    let order = await Order.build({
      user_id: user_id,
      address: address,
      full_name: full_name,
      phone_number: phone_number,
      note: note,
    });
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
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = add;
