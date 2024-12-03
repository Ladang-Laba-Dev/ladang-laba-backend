require('dotenv').config()
const mysql = require('mysql')

//Create MySQL connection pool
const pool = mysql.createPool({
    connectionLimit : 3,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    waitForConnections : true,
    maxIdle : 3,
    idleTimeout : 60000,
    enableKeepAlive : true
})

module.export=pool