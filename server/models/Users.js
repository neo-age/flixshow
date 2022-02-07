const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username:{ type : String },
    userage:{type : Number}
})

const userdata = mongoose.model("userdata", user)
module.exports =  userdata