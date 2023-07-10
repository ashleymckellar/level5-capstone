const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sauceSchema = new Schema({
    name: {
        type: String,
        rquired: true
    },
    // heatLevel: Number
    
})


module.exports = mongoose.model("Sauce", sauceSchema)