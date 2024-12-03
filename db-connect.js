const mysql = require('mysql')
const {dbHost, dbUsername, dbPassword, dbName, dbPort} = require('./config')
//Create MySQL connection pool
const pool = mysql.createPool({
    connectionLimit : 3,
    host : dbHost,
    port : dbPort,
    user : dbUsername,
    password : dbPassword,
    database : dbName,
    waitForConnections : true,
    maxIdle : 3,
    idleTimeout : 60000,
    enableKeepAlive : true
})

module.export=pool