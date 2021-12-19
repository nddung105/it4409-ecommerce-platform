const Joi = require('joi');
const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');


async function modifyProduct(req, res) {

  const id = req.params.id
  await Product.update(req.body,{where:{id:id}});

  return res.status(201).send({message:"update successfully"});
}

module.exports = modifyProduct