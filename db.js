const mongoose = require('mongoose');

//const url = "mongodb://127.0.0.1/CPMS";

const url = "mongodb://mongo:27017/CPMS";

mongoose.connect(
    url
).then(res=>{
    console.log("connection success");
    console.log(res);
}).catch(err=>{
    console.log("connection error");
    console.log(err);
});

module.exports = mongoose;