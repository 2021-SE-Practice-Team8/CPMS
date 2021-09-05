const mongoose = require('mongoose');

const logScheam = mongoose.Schema({
    id_num: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    log_info: Array
});

module.exports = mongoose.model("LogModel",logScheam,"log");