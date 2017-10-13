
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

var Sequelize = require("sequelize");

var keys=require("./keys.js");



//below is the local configuration when running locally
//var sequelize = new Sequelize("mayatsmolnik", "mayatsmolnik", keys.sqlKey, {
//host:"codeflink.net",
var sequelize = new Sequelize("POP_db", "root", "password", {
 host:"localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
