const express = require("express");
const router = express.Router();
const { validJWTSale, validJWT, validJWTAdmin } = require("../middlewares/validate");
const auth = require("../middlewares/validate");
const { order: orderController } = require("../controllers");

router.post("/add", validJWT, orderController.add);
router.post("/edit", validJWT, orderController.edit);
router.post("/sale_edit", validJWTSale, orderController.sale_edit);
router.get("/show", validJWTSale, orderController.show);
router.get("/sales_by_month", validJWTAdmin, orderController.sales_by_month);
router.get("/show_all_order_user", validJWT, orderController.show_all_order_user);
router.get("/:order_id", validJWT, orderController.get);

module.exports = router;