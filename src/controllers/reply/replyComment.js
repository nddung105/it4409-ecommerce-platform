const { abort } = require('../../utils/errors');
const Reply = require('../../models/Reply');


async function replyComment(req,res){
    const replyInfo = {
        // user_id:req.user.id,
        product_id: req.body.product_id,
        content: req.body.content,
        comment_id:req.body.comment_id
    }
    await Reply.create(replyInfo)
    return res.status(201).send({message: "create reply successfully"})
}

module.exports = replyComment