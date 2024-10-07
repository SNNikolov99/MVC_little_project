const express = require('express');
const router = express.Router();
const partModelController = require('../controllers/partModelController');

router.route('/')
    .post(partModelController.createNewPartModel)
    .get(partModelController.getAllParts)
    .put(partModelController.updatePartModel)
    .delete(partModelController.deletePartModel);

router.route('/:id')
    .get(partModelController.getPartModel)


module.exports = router;