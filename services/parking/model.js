const mongoose = require('mongoose');

const parkingScheam = mongoose.Schema({
    park_id: String,
    is_fixed: Boolean,
    is_occupied: Boolean,
    id_num: String
})

module.exports = mongoose.model("ParkingModel",parkingScheam,"parking");