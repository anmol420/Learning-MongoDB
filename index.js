const mongoose = require('mongoose');
const User = require("./User.js");

//You Can Give Your MongoDB URI Inside "" If You Dont Have MongoDB Locally Installed
mongoose.connect("mongodb://localhost:27017/testdb")

run()

async function run() {
    try {
        const user = await User.create({
            name: "Mr.X",
            age: 18,
            email: "MrX2022@mrx.com",
            hobbies : ["Coding","Gaming"],
            address : {
                street : "Road No.6",
                city : "London"
            },
        })
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}
