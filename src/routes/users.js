const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  validJWTAdmin,
  validJWTCustomer,
  validJWT,
} = require("../middlewares/validate");

const { users: userController } = require("../controllers");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/show", validJWT, userController.show);
router.post("/edit", validJWT, userController.edit);
router.post("/change_password", validJWT, userController.change_password);

module.exports = router;
