const express = require('express')
const app = express()
const morgan = require('morgan') // Morgan is a logging middleware used for logging HTTP requests and responses in Node.js applications. It helps with debugging and monitoring server behavior.
const mongoose = require('mongoose') // Mongoose is an Object Data Modeling (ODM) library for MongoDB in Node.js. It provides a higher-level abstraction for working with MongoDB databases, including defining schemas, models, and convenient methods for CRUD operations.


app.use(express.json());// Used to parse and handle JSON data sent in the request body of an HTTP request. Accessible by request.body
app.use(morgan('dev')); // It generates concise log messages to the console, providing information such as the HTTP method, URL, response status code, response time,etc...

mongoose.connect('mongodb://127.0.0.1:27017/hot-sauce');//Coonects to mongoDB server

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));// Saves to mongoDB and console.logs('meow') to verify that it is connected to mongoDB

//Error handler/s
app.use((error, request, response, next) => { 
    console.log(error)
    return response.send({errMsg: error.message})
    })



app.listen(8100, () => {
    console.log("The server is running on Port 8100")
})