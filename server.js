const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})