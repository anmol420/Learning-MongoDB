const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : String,
    age : Number
})

module.exports = mongoose.model("User", user)