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

router.post("/login", (req, res) => {
    const { userType, username, password } = req.body;
  
    Users.findUser({ userType, username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = getToken(user.username);
  
          res.status(200).json({
            message: `Hi ${user.username}`,
            token
          });
        } else {
          res.status(401).json({ error: `This is not for you.` });
        }
      })
      .catch(error => res.status(500).json(error.message));
});



module.exports = router;