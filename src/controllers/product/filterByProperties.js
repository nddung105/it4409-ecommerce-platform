const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');
const { Op } = require("sequelize");

async function filterByProperties(req,res){
    const brand = req.query.brand
    const limit = req.query.limit
    const offset = req.query.offset
    const condition = brand ? { brand: { [Op.like]:'%${brand}%'} }:null
    const data = await Product.findAll({
      where:condition,
      limit:limit,
      offset:offset
    })
    if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with brand=${brand}.`
        });
    }
}

module.exports = filterByProperties;