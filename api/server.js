const express = require("express")

const server = express();
server.use(express.json());
const carsRoute = require('./cars/cars-router')

server.use('/api/cars', carsRoute)

module.exports = server