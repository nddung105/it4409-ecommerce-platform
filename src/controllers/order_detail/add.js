const OrderDetail = require("../../models/OrderDetail");
const Product = require("../../models/Product");
const Order = require("../../models/Order")
const httpStatus = require("../../constants/http_status");

async function add(req, res, next) {
  try {
    const { order_id, product_id, quantity } = req.body;
    if (order_id && product_id && quantity) {
      const product = await Product.findOne({ where: { id: product_id } });
      const order = await Order.findOne({ where: { id: order_id } });
      let total_money = parseFloat(quantity) * parseFloat(product.price);
      let order_detail = await OrderDetail.build({
        order_id: order_id,
        product_id: product_id,
        quantity: quantity,
        total_money: total_money,
      });
      let total_order = order.total_money;
      order.total_money = total_money + total_order
      await order.save();
      await order_detail.save();
      return res.status(httpStatus.CREATED).json({
        id: order_detail.id,
        product_id: product_id,
        order_id: order_id,
        quantity: quantity,
        total_money: total_money,
      });
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

module.exports = add
