const { abort } = require('../../utils/errors');
const Comment = require('../../models/Comment');

async function modifyComment(req,res){
    const comment_id = req.body.comment_id
    const response = await Comment.update(req.body,{where:{id: comment_id}})
    if (response){
        res.status(201).send("Update comment successfully")
    } else{
        res.status(404).send({message: `Cannot find Comment with id=${comment_id}.`});
    }
}

module.exports = modifyComment