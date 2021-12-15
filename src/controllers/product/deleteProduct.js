const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');

async function deleteProduct(req,res){
    const productId = req.body.id
    try {
        const response = await Product.destroy({where:{id: productId}})
    } catch(err){
        
    }
    return res.status(201).send()
}

module.exports = deleteProduct