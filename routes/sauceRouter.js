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

//GET One
sauceRouter.get("/:sauceId", (request, response, next) => {
    const sauceId = request.params.sauceId;
    Sauce.findById(sauceId)
        .then(foundSauce => {
            if (!foundSauce) {
                return response.status(404).send(foundSauce)
            }
            response.status(200).send(foundSauce)
        })
        .catch(error => {
            response.status(500)
            return next(error)
        })
});

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
});

//DELETE one
sauceRouter.delete("/:sauceId", (request, response, next) => {
    Sauce.findOneAndDelete({_id: request.params.sauceId})
    .exec()
    .then(deletedSauce => {
        if(!deletedSauce) {
            return response.status(404).send("Sauce not found")
        }
        return response.status(200).send("Sauce found")
    })
    .catch(error => {
        response.status(500)
        return next(error)
    })
})

//UPDATE one
sauceRouter.put("/:sauceId", (req, res, next) => {
    Sauce.findOneAndUpdate(
        {_id: req.params.sauceId} ,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedSauce => {
            res.status(200).json(updatedSauce)
            })
        .catch(err => {
            res.status(500);
            return next(err)
        })
    })
    

module.exports = sauceRouter;