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
      offset:offset,
      order: [
        ['id', 'ASC'],
    ],
    })

    res.send(data)
}

module.exports = filterByProperties;