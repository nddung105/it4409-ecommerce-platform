const Order = require("../../models/Order");
const OrderDetail = require("../../models/OrderDetail");
const Product = require("../../models/Product");
const httpStatus = require("../../constants/http_status");

async function add(req, res, next) {
  try {
    const { address, full_name, phone_number, note, order_detail } = req.body;
    let order = await Order.build({
      user_id: req.userId,
      address: address,
      full_name: full_name,
      phone_number: phone_number,
      note: note,
    });
    await order.save();
    let order_total_money = 0;
    for (let i = 0; i < order_detail.length; i++) {
      const product = await Product.findOne({
        where: { id: order_detail[i].product_id },
      });
      let total_money =
        parseFloat(order_detail[i].quantity) * parseFloat(product.price);
      let order_detail_model = OrderDetail.build({
        order_id: order.id,
        product_id: order_detail[i].product_id,
        quantity: order_detail[i].quantity,
        total_money: total_money,
      });
      order_total_money += total_money;
      await order_detail_model.save();
    }
    order.total_money = order_total_money;
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
