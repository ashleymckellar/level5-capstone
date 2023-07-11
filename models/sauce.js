const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sauceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    heatRating: {
        type: Number
    },
    origin: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ingredients: {
        type: String
    },
    imageUrl: {
        type: String
    }
});


module.exports = mongoose.model("Sauce", sauceSchema);