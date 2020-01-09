const router = require('express').Router();

const Menu = require('../models/menuModel.js');
const authenticate = require('../authenticate/authenticate-middleware.js');

router.post('/', (req, res) => {
    const name = req.body
  
    Menu.menuItems(name)
      .then(menu => {
        res.json(menu)
      })
      .catch(error => res.status(500).json(error.message));
})

router.post('/additem', authenticate, (req, res) => {
    const item = req.body;

    Menu.insertMenuItem(item)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err =>{res.status(500).json({error_message:'Server Error', ErrNo:err})})
})


module.exports = router