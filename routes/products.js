const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/')
    .post(productController.createNewProduct)
    .put(productController.updateProduct)
    .get(productController.getAllProducts)
    .delete(productController.deleteProduct);


router.route('/:id')
    .get(productController.getProduct)
    

module.exports = router;