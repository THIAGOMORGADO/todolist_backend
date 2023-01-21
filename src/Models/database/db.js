const Sequelize = require('sequelize');
require('dotenv').config()

const connection = new Sequelize(process.env.HOST_NAME, process.env.USER_BD,  process.env.USER_BD_PASS, {
  host: 'localhost',
  dialect: 'postgres'
});

connection.authenticate()
.then(() => {
  console.log('Connection is established')
})
.catch(() => {
  console.log('Error na connections')
})

module.exports = connection;