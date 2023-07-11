const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sauceSchema = new Schema({
    name: {
        type: String,
        rquired: true
    },
    heatRating: {
        type: Number
    },
    origin: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    }
});


module.exports = mongoose.model("Sauce", sauceSchema);