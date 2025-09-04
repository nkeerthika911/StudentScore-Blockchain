const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    grade:{
        type: Number,
        required: true,
        min: 0,
        max: 100,
    }
}, {timestamps: true});

module.exports = mongoose.model('Student', dataSchema);