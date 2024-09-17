const { db, Model, DataTypes } = require("../db/connection.js");

let Profile;
Profile = db.define("Profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING,
})


module.exports = Profile;