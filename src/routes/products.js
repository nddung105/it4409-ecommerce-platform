const express = require('express')
const upload = require('../middlewares/upload')
const router = express.Router();

const {product:productController} = require('../controllers')

router.post('/',upload.single('myfile'),productController.addProduct);
router.delete('/:id',productController.deleteProduct)
router.get('/:id',productController.findProductById)
router.put('/:id',productController.modifyProduct)
router.get('',productController.filterByProperties)
router.post('/search',productController.searchProduct)
module.exports = router