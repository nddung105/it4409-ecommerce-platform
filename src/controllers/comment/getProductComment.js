const { abort } = require('../../utils/errors');
const Comment = require('../../models/Comment');
const { Op } = require("sequelize");

async function getProductComment(req,res){
    
    // const limit = req.query.limit
    // const offset = req.query.offset
    const product_id = req.query.product_id

    const data = await Comment.findAll({where:{product_id: product_id}
    })
    var rate = 0;
    for(let i = 0; i<data.length; i++){
        rate += data[i].rate
    }
    res.send({total:data.length,data,rate:data.length == 0 ? 0: rate/data.length})  
}

module.exports = getProductComment;