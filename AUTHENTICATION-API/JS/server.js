require('dotenv').config();
const { createServer } = require('http');
const colors = require('colors')
const app = require('./api/app');

const { PORT } = process.env

const server = createServer(app);
server.listen(PORT, () => {
    console.log(`go to http://127.0.0.1:${PORT}/api/v1/`.yellow.bold)
})
