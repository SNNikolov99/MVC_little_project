const express = require('express');
const router = express.Router();
const workorderController = require('../controllers/workorderController');

router.route('/')
    .post(workorderController.createNewWorkorder)
    .put(workorderController.updateWorkorder)
    .delete(workorderController.deleteWorkorder);

router.route('/:id')
    .get(workorderController.getWorkorder)
    .put(workorderController.updateWorkorder)
    .delete(workorderController.deleteWorkorder);

module.exports = router;