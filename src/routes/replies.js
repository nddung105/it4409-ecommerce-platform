const express = require('express')
const router = express.Router();

const {reply:replyController} = require('../controllers')

router.post('/',replyController.replyComment)
router.put('/',replyController.modifyReply)
module.exports = router