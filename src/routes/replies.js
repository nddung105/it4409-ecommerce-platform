const express = require('express')
const router = express.Router();
const auth = require("../middlewares/validate");
const {asyncWrapper} = require("../utils/asyncWrapper")

const {reply:replyController} = require('../controllers')

router.post('/',replyController.replyComment)
router.put('/:reply_id',replyController.modifyReply)
module.exports = router