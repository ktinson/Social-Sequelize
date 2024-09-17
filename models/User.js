const {db} = require('../db/connection')
const {Sequelize} = require('sequelize')

let User = db.define("User", {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
})

module.exports = User;