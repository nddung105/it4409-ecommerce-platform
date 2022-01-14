const express = require('express')
const router = express.Router();
const {validUser,validJWTAdmin} = require("../middlewares/validate");
const auth = require("../middlewares/auth")
const {asyncWrapper} = require("../utils/asyncWrapper")

const {reply:replyController} = require('../controllers')

router.post('/',auth,replyController.replyComment)
router.put('/:reply_id',validJWTAdmin,replyController.modifyReply)
module.exports = router