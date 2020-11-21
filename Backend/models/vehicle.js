const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { VEHICLE_TYPE } = require('config.json');


const schema = new Schema({
    no: {
        type: Number,
        default: 1
    },
    description: {
        type: String
    },
    picture: {
        type: String
    },
    type: {
        type: Number,
        default: VEHICLE_TYPE.car
    },
    capacity: {
        type: Number,
        default: 10
    },
    trips_count: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Vehicle', schema);