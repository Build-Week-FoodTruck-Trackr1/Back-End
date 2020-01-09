const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../routers/auth-router.js');
const trucksRouter = require('../routers/trucks-router.js');
const menuRouter = require('../routers/menu-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter)
server.use('/trucks', trucksRouter);
server.use('/trucks/menu', menuRouter)

server.get('/', (req, res) => {
    res.send('Congratulations Lambda Student! You made it! To register be sure to include "/api/register" to the link above')
})

module.exports = server;