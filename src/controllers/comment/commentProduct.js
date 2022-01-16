const { abort } = require('../../utils/errors');
const Comment = require('../../models/Comment');
const {TOXIC_WORDS} = require('../../constants/constants')

async function validateContent(content){
    TOXIC_WORDS.forEach(word => {
        if (content.indexOf(word) > -1){
            abort(400,`Found toxic word:${word} in your comment`)
        }
    });
}

async function commentProduct(req,res){
    const conmmentInfo = {
        // user_id:req.user.id,
        product_id: req.body.product_id,
        content: req.body.content,
        rate: req.body.rate,
        email: req.body.email,
        name: req.body.name
    }
    await validateContent(req.body.content)
    await Comment.create(conmmentInfo)
    return res.status(201).send({message: "create comment successfully"})
}

module.exports = commentProduct