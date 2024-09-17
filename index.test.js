const { Comment, Like, Post, Profile, User } = require("./index");
const {db} = require('./db/connection')
const {Sequelize} = require('sequelize')
const users = require("./seed/users.json");

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    test("create new user", async function() {
        await User.bulkCreate(users)
        const newUSer = await User.findByPk(1)
        expect(newUSer.id).toBe(1);
    })
    
    test("replace with your test", function() {
        expect(true).toBe(true);
    })




})