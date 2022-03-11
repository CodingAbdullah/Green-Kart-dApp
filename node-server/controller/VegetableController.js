const Vegetable = require("../model/Vegetable");

exports.getVegetableByName = (req, res) => {
    const name = req.body.name.toString();
    res.json({
        vegetable: JSON.parse(Vegetable.findOne({ name : {$eq : name }}))
    });
}

exports.getVegetableById = (req, res) => {
    const id = req.body.id.toString().parseInt();
    res.json({
        vegetable: JSON.parse(Vegetable.findOne({ id : {$eq : id }}))
    });
}

exports.getVegetableByPrice = (req, res) => {
    const value = req.body.value.toString().parseDouble();
    res.json({
        vegetable : JSON.parse(Vegetable.findOne({ price : {$eq : value }}))
    });
}