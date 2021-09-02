const mongoose = require('mongoose');

const carScheam = mongoose.Schema({
    id_num: String,
    name: String,
    tel: String,
    apartment: String
})

module.exports = mongoose.model("CarModel",carScheam,"car");