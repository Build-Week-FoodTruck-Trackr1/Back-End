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

router.post('/menu', (req, res) => {

  const name = req.body

  Trucks.truckMenu(name)
    .then(menu => {
      res.json(menu)
    })
    .catch(error => res.status(500).json(error.message));
})


router.post('/', authenticate, (req, res) => {
    const truck = req.body;

    Trucks.insertTruck(truck)
        .then(truck => {
            res.status(201).json(truck)
        })
        .catch(err =>{
            res.status(500).json({error_message:'Server Error', ErrNo:err})})
})

router.delete('/', authenticate, (req, res) => {
    const token = req.headers.authorization;

    const truckName = req.body   

    Trucks.remove(truckName, token)
        .then(count => {
            console.log(count)
            if (count) {
              res.json({ removed: count });
            } else {
              res.status(404).json({ message: 'Could not find truck with that name' });
            }
          })
          .catch(err => {
            res.status(500).json({ message: 'Failed to delete truck' });
          });
})  

router.put('/', authenticate, (req, res) => {
    const token = req.headers.authorization;

    const changes = req.body;

    Trucks.update(changes, token)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: 'Could not find truck' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update truck' });
    });
})
module.exports = router;