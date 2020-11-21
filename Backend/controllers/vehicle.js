const express = require('express');
const router = express.Router();

const vehicleService = require('../services/vehicle');


function create(req, res, next) {
    vehicleService
        .create(req.body)
        .then(vehicle => res.json(vehicle))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    vehicleService
        .getAll()
        .then(vehicles => res.json(vehicles))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    vehicleService
        .getById(req.vehicle.sub)
        .then(vehicle => vehicle ? res.json(vehicle) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    vehicleService
        .getById(req.params.id)
        .then(vehicle => vehicle ? res.json(vehicle) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    vehicleService
        .update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    vehicleService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

module.exports = {
    create,
    getAll,
    getCurrent,
    getById,
    update,
    delete: _delete,
}