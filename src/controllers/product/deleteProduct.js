const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');

async function deleteProduct(req,res){
    const productId = req.params.id
    const response = await Product.destroy({where:{id: productId}})
    if (response){
        res.status(201).send("Delete Product successfully")
    } else{
        res.status(404).send({
            message: `Cannot find Product with id=${productId}.`
          });
    }
}

module.exports = deleteProduct