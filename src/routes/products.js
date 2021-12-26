const express = require('express')
const upload = require('../middlewares/upload')
const router = express.Router();

const { product: productController } = require("../controllers");
const auth = require("../middlewares/auth");
const {asyncWrapper} = require("../utils/asyncWrapper")

router.post('/',upload.single('myfile'),productController.addProduct);
router.delete('/:id',productController.deleteProduct)
router.get('/:id',productController.findProductById)
router.put('/:id',productController.modifyProduct)
router.get('',productController.filterByProperties)
router.post('/search',productController.searchProduct)
module.exports = router