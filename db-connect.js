require('dotenv').config()
const mysql = require('mysql2/promise')

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
async function checkConnect() {
    try {
        const conn = await pool.getConnection();
        console.log("Database connection established successfully!");

        conn.release();
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
    }
}

checkConnect();
module.exports=pool