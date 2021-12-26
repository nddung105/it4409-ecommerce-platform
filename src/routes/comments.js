const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {asyncWrapper} = require("../utils/asyncWrapper")

const { comment: commentController } = require("../controllers");

router.post("/", commentController.commentProduct);
router.put("/", commentController.modifyComment);
router.delete("/:id", commentController.deleteComment);
module.exports = router;
