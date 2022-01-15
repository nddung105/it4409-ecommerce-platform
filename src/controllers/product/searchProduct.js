const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');
const { Op } = require("sequelize");

async function searchProduct(req,res){
    const query = req.query.query
    const condition =  { name: { [Op.like]:`%${query}%`} }
    const data = await Product.findAll({
      where:condition,
    })
    if (data) {
        res.send({total:data.length,data:data});
      } else {
        res.status(404).send({
          message: `Cannot find Product with brand=${brand}.`
        });
    }
}

module.exports = searchProduct;