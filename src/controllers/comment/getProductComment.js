const { abort } = require('../../utils/errors');
const Comment = require('../../models/Comment');
const { Op } = require("sequelize");

async function getCommentComment(req,res){
    
    const limit = req.query.limit
    const offset = req.query.offset
    const data = await Comment.findAll({
      limit:limit,
      offset:offset
    })

    res.send(data)  
}

module.exports = getCommentComment;