const {db} = require('../db/connection')
const {Sequelize} = require('sequelize')

let Like;
Like = db.define("Like", {
    reactionType: Sequelize.STRING,
    createdAt: Sequelize.STRING,
})
module.exports = Like;