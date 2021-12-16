const { abort } = require('../../utils/errors');
const Comment = require('../../models/Comment');

async function deleteComment(req,res){
    const comment_id = req.params.id
    const response = await Comment.destroy({where:{id: comment_id}})
    if (response){
        res.status(201).send("Delete Product successfully")
    } else{
        res.status(404).send({message: `Cannot find Product with id=${productId}.`});
    }
}

module.exports = deleteComment