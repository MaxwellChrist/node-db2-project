const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
  .then(result => {
    if(result == null) {
      res.status(404).json({ message: "car with id <car id> is not found" })
      return
    } else {
      req.car = result;
      next()
    }
  })
}

const checkCarPayload = (req, res, next) => {
  if (typeof req.body.vin !== "string" ) {
    res.status(400).json({ message: "vin is missing" })
    return;
  }
  if (typeof req.body.make !== "string" || req.body.make.trim() === "") {
    res.status(400).json({ message: "make is missing" });
    return;
  }
  if (typeof req.body.model !== "string" || req.body.model.trim() === "") {
    res.status(400).json({ message: "model is missing" });
    return;
  }
  if (typeof req.body.mileage !== "number" || isNaN(req.body.mileage)) {
    res.status(400).json({ message: "mileage is missing" });
    return;
  }
  next();
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin); 
  if (isValidVin === false) {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
    return;
  }
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  const vin = req.body.vin;
  Cars.vinCheck({'vin': vin})
  .then(result => {
    if (result.length > 0) {
      res.status(400).json({ message: `vin ${vin} already exists` });
      return
    }
    next()
  })
}

module.exports = {
  checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique
}