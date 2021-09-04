const mongoose = require('mongoose');

const parkingScheam = mongoose.Schema({
    park_id: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    is_fixed: Boolean,
    is_occupied: Boolean,
    id_num: {
        type: String,
        unique: true,
        index: true
    }
})

module.exports = mongoose.model("ParkingModel",parkingScheam,"parking");