const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');

async function findProductById(req,res){
    const productId = req.params.id
    const data = await Product.findByPk(productId)

    if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${productId}.`
        });
    }
}

module.exports = findProductById;