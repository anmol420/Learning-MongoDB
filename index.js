const mongoose = require('mongoose');
const User = require("./User.js");

mongoose.connect("mongodb://localhost:27017/testdb") //You Can Give Your MongoDB URI Inside "" If You Dont Have MongoDB Locally Installed

const user = new User({ name : "Mr.X", age : 18 })

user.save().then(() => console.log("User Saved"))
