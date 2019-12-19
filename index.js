require('dotenv').config();

const server = require('./API/server.js');

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`!!!!http://localhost:${PORT}!!!!`)
})