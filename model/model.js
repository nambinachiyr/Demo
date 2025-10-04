const { request } = require('express');
const mongoose = require('mongoose');
const demo_plan = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('DemoDB',demo_plan,'demo')