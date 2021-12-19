const express = require("express");
const router = express.Router()

const {users: userController} = require("../controllers")

router.post("/register", userController.register)
router.post("/login", userController.login)

module.exports = router