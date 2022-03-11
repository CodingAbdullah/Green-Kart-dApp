const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegetableSchema = new Schema({
    item_id : {
        required: true,
        type: Number
    },
    name : {
        required: true,
        type: String
    },
    price : {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Vegetable', vegetableSchema);