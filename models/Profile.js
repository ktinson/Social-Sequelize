const {db} = require('../db/connection')
const {Sequelize} = require('sequelize')

let Profile;
Profile = db.define("Profile", {
    bio: Sequelize.STRING,
    profilePicture: Sequelize.STRING,
    birthday: Sequelize.STRING,
})


module.exports = Profile;