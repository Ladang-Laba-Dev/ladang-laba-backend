const mysql = require('mysql')
const pool = require('../db-connect')
console.log("hello")
const find = async (username, email) => {
    const statement = 'SELECT * FROM ?? WHERE username= ? OR email = ?'
    const value = ['users', username, email]
    const query = mysql.format(statement, value)
    console.log(query)
    try{
        const result = await pool.query(query)
    }catch (error){
        console.error(error)
    }
}
const insert = async (id, username, password, email) => {
    const statement = 'INSERT INTO ?? SET ?'
    const value = ['users', {
        id,
        username: username,
        password: password,
        emai: email
    }]
    const query = mysql.format(statement, value)
    try{
        const result = await pool.query(query)
    }catch (error){
        console.error(error)
    }
}
const update = async (id, username, password, email) => {
    const statement = 'UPDATE ?? SET ? WHERE ?? = ?'
    const value = ['users', {username: username, password: password, email: email}, 'id', id]
    const query = mysql.format(statement, value)
    try{
        const result = await pool.query(query)
    }catch (error){
        console.error(error)
    }
}
const remove = async (id) => {
    const statement = 'DELETE FROM ?? WHERE ?? = ?'
    const value = ['users', 'id', id]
    const query = mysql.format(statement, value)
    try{
        const result = await pool.query(query)
    }catch (error){
        console.error(error)
    }
}
find('nidu', 'nidu@nidu.com')
module.exports = {find, insert, update, remove}