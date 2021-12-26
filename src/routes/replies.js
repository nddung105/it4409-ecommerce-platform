const express = require('express')
const router = express.Router();
const auth = require("../middlewares/auth");
const {asyncWrapper} = require("../utils/asyncWrapper")

const {reply:replyController} = require('../controllers')

router.post('/',replyController.replyComment)
router.put('/',replyController.modifyReply)
module.exports = router