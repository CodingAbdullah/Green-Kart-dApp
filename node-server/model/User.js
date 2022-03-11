const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    firstName : {
        required: true,
        type: String
    },
    lastName : {
        required: true,
        type: String
    },
    age : {
        required: true,
        type: Number
    },
    email : {
        required: true,
        type: String,
        unique: true
    },
    password : {
        required: true,
        type: String
    },
    address : {
        required: true,
        type: String
    },
    gender : {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("User", User);