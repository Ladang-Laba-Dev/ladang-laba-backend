const mysql = require('mysql2/promise')
const pool = require('../db-connect')
const find = async (username, email) => {
    const sql = 'SELECT * FROM `users` WHERE `username`= ? OR `email` = ?'
    const values = [username, email]
    try{
        const [rows, fields] = await pool.execute(sql, values)
        return rows
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const insert = async (id, username, password, email) => {
    const sql = 'INSERT INTO ?? SET ?'
    const values = ['users', {
        id,
        username: username,
        password: password,
        email: email
    }]
    const query = mysql.format(sql, values)
    try{
        const result = await pool.query(query)
        return {success:true, result}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
module.exports = {find, insert}