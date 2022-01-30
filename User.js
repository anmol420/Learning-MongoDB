const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : String,
    age : {
        type : Number,
        min : 1,
        max : 100,
    },
    email : {
        type : String,
        minlength : 10,
        maxlength : 20,
        required : true,
        lowercase : true,
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : () => Date.now(), 
    },
    updatedAt : {
        type : Date,
        default : () => Date.now(), 
    },
    bestfriend : mongoose.SchemaTypes.ObjectId, //ObjectId Reference IDE
    hobbies : [String], //Array
    address : {
        street : String,
        city : String
    }
})

//Creating A Normal Method
user.methods.sayHi = function() {
    console.log(`Hi My Name Is ${this.name}`)
}

//Creating A Static Method
user.statics.findByName = function(name) {
    return this.find({
        name : new RegExp(name, `i`)
    })
}

//Creating A Ouery Method
user.query.byName = function(name) {
    return this.where({
        name : new RegExp(name, `i`)
    })
}

//Creating A Virtual
user.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`
})

//MiddleWare - Pre Function
user.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

//MiddleWare - Post Function
user.post('save', function(doc, next) {
    doc.sayHi()
    next()
})

module.exports = mongoose.model("User", user)