const mongoose = require('mongoose');

const carScheam = mongoose.Schema({
    id_num: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    name: String,
    tel: String,
    apartment: String
})

module.exports = mongoose.model("CarModel",carScheam,"car");