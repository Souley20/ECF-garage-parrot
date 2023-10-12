const express = require('express')
const fuelController = require("../../controller/Fuel.Controller")
const router = express.Router()

// list of fuel
router.get('/fuels', fuelController.getFuel)
// add a fuel
router.post('/protected/fuel', fuelController.addFuel)
// update fuel
router.put('/protected/fuel', fuelController.updateFuel)


module.exports = router