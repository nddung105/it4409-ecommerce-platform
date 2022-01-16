const Order = require("../../models/Order");
const httpStatus = require("../../constants/http_status");

async function edit(req, res, next) {
  try {
    const { id, address, full_name, phone_number, note, status } = req.body;
    let order = await Order.findOne({ where: { id: id } });
    if (req.userId == order.user_id) {
      const listPros = [
        "id",
        "address",
        "full_name",
        "phone_number",
        "note",
        "status",
      ];
      for (let i = 0; i < listPros.length; i++) {
        let pro = listPros[i];
        if (req.body.hasOwnProperty(pro)) {
          if (req.body[pro]) {
            order[pro] = req.body[pro];
          }
        }
      }
      await user.save();
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
