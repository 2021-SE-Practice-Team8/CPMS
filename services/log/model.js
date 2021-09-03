const mongoose = require('mongoose');

const logScheam = mongoose.Schema({
    id_num: String,
    log_info: Array
})

module.exports = mongoose.model("LogModel",LogScheam,"log");