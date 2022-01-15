const express = require('express')
const validJWTNeeded = require('../middlewares/validate')
const router = express.Router();
const auth = require("../middlewares/validate");
const {asyncWrapper} = require("../utils/asyncWrapper")

const { comment: commentController } = require("../controllers");
const { route } = require('express/lib/application');

router.get("/", commentController.getProductComment);
router.post("/", commentController.commentProduct);
router.put("/", commentController.modifyComment);
router.delete("/:id",auth.validJWTAdmin, commentController.deleteComment);
module.exports = router;
