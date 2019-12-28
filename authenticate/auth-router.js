const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/userModels.js');
const getToken = require('./getToken.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;
    const token = getToken(user);

    Users.insert(user)
        .then(newUser => {
            console.log(newUser)
            res.status(201).json({message: 'Success! you have completed registration', newUser, token})
        })
        .catch(err =>{
            res.status(500).json({error_message:'Server Error', ErrNo:err})})
})

router.post('/login', (req, res) => {
    const { type, username, password } = req.body;
  
    Users.findUser({ type, username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = getToken(user);

          console.log(user)

          res.status(200).json({
            message: `Hi ${user.username}`,
            type: `${user.type}`,
            token

          });
        } else {
          res.status(401).json({ error: `This is not for you.` });
        }
      })
      .catch(error => res.status(500).json(error.message));
});



module.exports = router;