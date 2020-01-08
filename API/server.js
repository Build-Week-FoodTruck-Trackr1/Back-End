const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../authenticate/auth-router.js');
const trucksRouter = require('../trucks/trucks-router.js');
const authenticate = require('../authenticate/authenticate-middleware.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter)
server.use('/api/trucks', trucksRouter);

server.get('/', (req, res) => {
    res.send('Congratulations Lambda Student! You made it! To register be sure to include "/api/register" to the link above')
})

module.exports = server;