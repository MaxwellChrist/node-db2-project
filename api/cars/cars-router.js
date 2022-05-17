const router = require('express').Router();
const Cars = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware')

router.get('/', (req, res) => {
    Cars.getAll()
    .then(result => {
        res.json(result);
    })
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car);
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res) => {
    Cars.create(req.body)
    .then(result => {
        res.json(result);
    })
})


module.exports = router;