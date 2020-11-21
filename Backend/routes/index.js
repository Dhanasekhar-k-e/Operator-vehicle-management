const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const vehicleRouter = require('./vehicle');


router.use('/users', userRouter);
router.use('/vehicles', vehicleRouter);

module.exports = router;