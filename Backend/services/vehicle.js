const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('_helpers/db');
const Vehicle = db.Vehicle;


async function getAll() {
    return await Vehicle.find();
}

async function getById(id) {
    return await Vehicle.findById(id);
}

async function getByNo(no) {
    return await Vehicle.findOne({no});
}

async function create(vehicleParam) {
    const vehicle = new Vehicle(vehicleParam);
    let vehicles = await Vehicle.find();
    let maxNo = 0;
    vehicles.forEach(vehicle => {
        if (vehicle.no > maxNo) {
            maxNo = vehicle.no;
        }
    });
    vehicle.no = maxNo + 1;

    await vehicle.save();
    return vehicle.toJSON();
}

async function update(id, vehicleParam) {
    const vehicle = await Vehicle.findById(id);

    if (!vehicle) throw 'Vehicle not found';
    Object.assign(vehicle, vehicleParam);

    await vehicle.save();
}

async function _delete(id) {
    await Vehicle.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};