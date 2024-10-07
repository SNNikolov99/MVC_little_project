const express = require('express');
const router = express.Router();
const PIController = require('../controllers/productInstanceController');

router.route('/')
    .post(PIController.createNewProductInstance)
    .put(PIController.updateProductInstance)
    .delete(PIController.deleteProductInstance);

router.route('/:id')
    .get(PIController.getProductInstance)
    

module.exports = router;