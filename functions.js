const mongoose = require('mongoose');
const User =  require("./User.js");

mongoose.connect("mongodb://localhost:27017/testdb")

run ()

async function run() {
    try {
        const user = await User.findOne({ name : "Mr.X", email : "MrX2022@mrx.com" })
        console.log(user)
        await user.save()
        console.log(user)
    } catch(e) {
        console.log(e.message)
    }
}