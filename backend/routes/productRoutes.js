const express = require('express');
const {getAllProducts,createProduct}=require('../controller/productController')

const router = express.Router();

router.route('/product').get(getAllProducts)
router.route('/product/new').post(createProduct)


module.exports = router;