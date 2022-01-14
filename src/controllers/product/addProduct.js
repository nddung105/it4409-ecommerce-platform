const Joi = require('joi');
const { abort } = require('../../utils/errors');
const Product = require('../../models/Product');

async function validation(productInfo) {
    try {
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        brand: Joi.string().required(),
        description: Joi.string().required(),
      });
  
      return await schema.validate(productInfo)
    } catch (error) {
      console.log(error)
      return abort(400, 'Params error');
    }
  }

async function addProduct(req, res) {

  const file = req.file.location
  if(!file) {
    abort(400,"File not found")
  }

  const productInfo = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    brand: req.body.brand,
    description: req.body.description,
    image_link:file.location
  };

  await validation(productInfo);
  
  await Product.create(productInfo);

  return res.status(201).send({message:"create successfully"});
}

module.exports = addProduct