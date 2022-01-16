const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/upload");
const auth = require("../middlewares/auth");
const {
  validJWTAdmin,
  validJWTSale,
  validJWT,
} = require("../middlewares/validate");

const { users: userController } = require("../controllers");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/register_sale", validJWTAdmin, userController.register_sale);
router.get("/show", validJWT, userController.show);
router.get("/show_all_customer", validJWTSale, userController.show_all_customer);
router.get("/show_all_sale", validJWTAdmin, userController.show_all_sale);
router.post("/edit", validJWT, userController.edit);
router.post("/change_password", validJWT, userController.change_password);

module.exports = router;
