const express = require('express')
const router = express.Router();

const {comment:commentController} = require('../controllers')

router.post('/',commentController.commentProduct)
router.put('/',commentController.modifyComment)
router.delete('/:id',commentController.deleteComment)
module.exports = router