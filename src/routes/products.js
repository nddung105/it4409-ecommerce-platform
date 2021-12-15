const express = require('express')
const router = express.Router();

const {product:productController} = require('../controllers')

router.post('/',productController.addProduct);
router.delete('/',productController.deleteProduct)
router.get('/:id',productController.findProductById)
router.put('/:id',productController.modifyProduct)
router.get('',productController.filterByProperties)
router.post('/search',productController.searchProduct)
module.exports = router