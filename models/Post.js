const {db} = require('../db/connection')
const {Sequelize} = require('sequelize')

let Post;
Post = db.define("Post", {
    title: Sequelize.STRING,
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING,
})

module.exports = Post;