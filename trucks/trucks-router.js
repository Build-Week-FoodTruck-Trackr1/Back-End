const router = require('express').Router();

const Trucks = require('../models/trucksModel.js');
const getToken = require('../authenticate/getToken.js')

router.get('/', (req, res) => {
    const token = req.headers.authorization;
    Trucks.getTrucksOwned(token)
        .then(trucks => {
            res.json(trucks);
        })
})

module.exports = router;