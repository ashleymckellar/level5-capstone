const express = require('express')
const sauceRouter = express.Router()


const Sauce = require('../models/sauce.js') // allows me to use the Sauce model in current file to perform the CRUD method related to the sause.js.



//GET all
sauceRouter.get("/", (request, response, next) => {
    Sauce.find()
        .exec()
        .then(sauce => {
            return response.status(200).send(sauce)
        })
        .catch(error => {
            response.status(500)
            return next(error)
        })
})

// POST(add one); remember this goes throught the sauces.js and server.js(middleware) so have the correct name in postman --- http://localhost:8100/sauces/
sauceRouter.post("/", (request, response, next) => {
    const newSauce = new Sauce(request.body)
    newSauce
        .save()
        .then(savedSauce => {
            return response.status(200).send(savedSauce)
        })
        .catch(error => {
            response.status(500)
            return next(error)
        })
})


module.exports = sauceRouter;