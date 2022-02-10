const mongoose = require('mongoose');
const SignSc = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true
    },
    Monumber:{
        type: Number
    }
})
const sign = new mongoose.model( "Sign",SignSc)
module.exports =sign