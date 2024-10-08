const express = require('express');
const router = express.Router();
const PIController = require('../controllers/productInstanceController');

router.route('/')
    .post(PIController.createNewProductInstance)
    .put(PIController.updateProductInstance)
    .get(PIController.getAllPIs)
    .delete(PIController.deleteProductInstance);

router.route('/:id')
    .get(PIController.getProductInstance)
    

module.exports = router;