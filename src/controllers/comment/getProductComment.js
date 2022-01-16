const { abort } = require('../../utils/errors');
const Comment = require('../../models/Comment');
const { Op } = require("sequelize");

async function getProductComment(req,res){
    
    // const limit = req.query.limit
    // const offset = req.query.offset
    const product_id = req.query.product_id
    const condition = product_id ? {product_id: product_id} : null
    const data = await Comment.findAll({where: condition});
    var rate = 0;
    for(let i = 0; i<data.length; i++){
        rate += data[i].rate
    }
    if(!product_id) rate = 0
    else {
        if (data.length != 0) rate = rate/data.length
        else rate = 0
    }
    res.send({total:data.length,data,rate:rate})  
}

module.exports = getProductComment;