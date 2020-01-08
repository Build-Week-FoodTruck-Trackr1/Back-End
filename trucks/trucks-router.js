const router = require('express').Router();

const Trucks = require('../models/trucksModel.js');
const authenticate = require('../authenticate/authenticate-middleware.js')

router.get('/', (req, res) => {
    Trucks.getTrucks()
        .then(trucks => {
            res.json(trucks);
        })
        .catch(error => res.status(500).json(error.message));
})

router.get('/owned', authenticate, (req, res) => {
    const token = req.headers.authorization;
    Trucks.trucksOwned(token)
        .then(trucks => {
            res.json(trucks);
        })
        .catch(error => res.status(500).json(error.message));
})

router.post('/add', authenticate, (req, res) => {
    const truck = req.body;

    Trucks.insertTruck(truck)
        .then(truck => {
            res.status(201).json(truck)
        })
        .catch(err =>{
            res.status(500).json({error_message:'Server Error', ErrNo:err})})
})

module.exports = router;