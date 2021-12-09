const pool = require('../constants/db')
const Joi = require('joi');
const { Validator } = require('node-input-validator');


async function validation(productInfo) {
  try {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.string().required(),
      brand: Joi.string().required(),
      description: Joi.string().required(),
    });

    return await Joi.validate(productInfo, schema);
  } catch (error) {
    return abort(400, 'Params error');
  }
}

class ProductController {

    //POST
    async create(req,res){
        const { name, price,category,brand,description } = req.body

        // console.log(req.body)
        pool.query('INSERT INTO users (name, email) VALUES ($1, $2)')
            .then(data => res.send(data))
            .catch(err => {
              res.status(500).send({
                  message:
                  err.message || "Some error occurred while creating the Tutorial."
              })
            })
    }

    //GET all product
    async findALl(req,res){
        const totalProduct = 'SELECT * FROM products'

        pool.query(totalProduct)
            .then(data => res.send(data))
            .catch(err => {
              res.status(500).send({
                  message:
                  err.message || "Some error occurred while creating the Tutorial."
              })
            })
    }

    async findById(req,res){
        const id = parseInt(req.params.id)
        const getProductById = 'SELECT * FROM products WHERE id = {id}'

        pool.query(getProductById)
            .then(data => {
              if(!data)
                res.status(404).send({message: "The product is not existed"})
              else res.send(data)
            })
            .catch(err => {
              res.status(500).send({message: "Error retrieving product with id" + id})
            })
    }
    
    //Truyen tren param
    async findByName(req,res){
        const name = req.params.query
        const getProductByName = 'SELECT * FROM products WHERE name LIKE %{name}%'
        pool.query(getProductByName)
            .then(data => res.send(data))
            .catch(err => {
              res.status(500).send({message: "Error retrieving product with id: " + id})
            })

    }

    //PUT
    async updateById(req,res){

    }

    //DELETE
    async deleteById(req,res){
      const id = parseInt(req.params.id)
      const deleteProductById = 'DELETE FROM products WHERE id = {id}'

      pool.query(deleteProductById)
          .then(data => {
            if(!data)
              res.status(404).send({message: "The product is not existed"})
            else res.send("Tutorial delete successfully")
          })
          .catch(err => {
            res.status(500).send({message: "Error deleting product with id" + id})
          })
    }


}

module.exports = new ProductController();