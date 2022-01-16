const express = require("express");
const router = express.Router();
const { validJWTSale, validJWT } = require("../middlewares/validate");
const auth = require("../middlewares/validate");
const { order_detail: orderDetailController } = require("../controllers");

router.post("/add", validJWT, orderDetailController.add);
router.post("/:order_id", validJWT, orderDetailController.get);

// router.post("/edit", validJWT, orderController.edit);
// router.get("/show", validJWTSale, orderController.show);

module.exports = router;
