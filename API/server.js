const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../authenticate/auth-router.js');
const authenticate = require('../authenticate/authenticate-middleware.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter)

module.exports = server;