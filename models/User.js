const { db, Model, DataTypes } = require("../db/connection.js");

let User;
User = db.define("User", {
    name: DataTypes.STRING,
})

module.exports = User;