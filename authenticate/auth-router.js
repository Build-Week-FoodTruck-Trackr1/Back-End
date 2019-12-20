const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/userModels.js');
const getToken = require('./getToken.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 4);
    const token = getToken(user.username);

    user.password = hash;

    Users.insert(user)
        .then(newUser => {
            res.status(201).json({message: 'Success! you have completed registration', newUser, token})
        })
        .catch(err =>{
            console.log(`${user.type}`)
            res.status(500).json({error_message:'Server Error', ErrNo:err})})
})

module.exports = router;