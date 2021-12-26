const express = require("express");
const router = express.Router();

const { product: productController } = require("../controllers");
const auth = require("../middlewares/auth");
const {asyncWrapper} = require("../utils/asyncWrapper")

router.post("/", productController.addProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/:id", auth, asyncWrapper(productController.findProductById)); // Example use auth validation when call API
router.put("/:id", productController.modifyProduct);
router.get("", productController.filterByProperties);
router.post("/search", productController.searchProduct);
module.exports = router;
