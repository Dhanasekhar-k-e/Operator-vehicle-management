const express = require('express');
const router = express.Router();

const vehicleController = require('controllers/vehicle');


router
    .post('/', vehicleController.create)
    .get('/', vehicleController.getAll)
    .get('/current', vehicleController.getCurrent)
    .get('/:id', vehicleController.getById)
    .put('/:id', vehicleController.update)
    .delete('/:id', vehicleController.delete);

module.exports = router;