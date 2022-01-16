const Order = require("../../models/Order");
const httpStatus = require("../../constants/http_status");
const { ODER_PROCESSED } = require("../../constants/constants");

async function show(req, res, next) {
  try {
    let order = await Order.findAll();
    let result = {};
    for (let i = 0; i < order.length; i++) {
      if (order[i].status == ODER_PROCESSED) {
        let date = new Date(order[i].updateTimestamp);
        let key = i + 1 + "-2021";
        if (result.hasOwnProperty(key)) {
          result[key]["total_money"] += order[i].total_money;
          result[key]["total_order"] += 1;
        } else {
          result[key] = {
            total_money: order[i].total_money,
            total_order: 1,
          };
        }
      }
    }
    // console.log(result);
    return res.send({ data: result });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = show;
