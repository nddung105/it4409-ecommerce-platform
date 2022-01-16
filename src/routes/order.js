const express = require("express");
const router = express.Router();
const { validJWTSale, validJWT } = require("../middlewares/validate");
const auth = require("../middlewares/validate");
const { order: orderController } = require("../controllers");

router.post("/add", validJWT, orderController.add);
router.post("/edit", validJWT, orderController.edit);
router.post("/sale_edit", validJWTSale, orderController.sale_edit);
router.get("/show", validJWTSale, orderController.show);
router.get("/:order_id", validJWT, orderController.get);

module.exports = router;
