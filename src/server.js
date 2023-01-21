const express = require('express')
require('dotenv').config();

const  UserController = require('./controllers/UserControlle')


const PORT = 3333;

const server = express();
server.use(express.json());

server.get('/user', UserController.show)
server.get('/user/:id',  UserController.index)
server.post('/user', UserController.create)
server.put('/user/:id', UserController.update)
server.delete('/user/:id', UserController.delete)



server.listen(PORT, () => {
  console.log('listening on port')
})