const {db} = require('../db/connection')
const {Sequelize} = require('sequelize')
let Comment;
Comment = db.define("Comment", {
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING,
})

module.exports = Comment;