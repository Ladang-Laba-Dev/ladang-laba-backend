const mysql = require('mysql2/promise')
const pool = require('./db-connect')

const getAll = async() => {
    const sql = 'SELECT `id`, `username`, `email`, `created_at` from users'
    try{
        const [rows, fields] = await pool.execute(sql)
        return {success:true, rows}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const update = async (id, username, password, email) => {
    const sql = 'UPDATE ?? SET ? WHERE ?? = ?'
    const values = ['users', {username: username, password: password, email: email}, 'id', id.id]
    const query = mysql.format(sql, values)
    try{
        const result = await pool.query(query)
        return {success:true, result}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const remove = async (id) => {
    const statement = 'DELETE FROM ?? WHERE ?? = ?'
    const value = ['users', 'id', id.id]
    const query = mysql.format(statement, value)
    console.log(query)
    try{
        const result = await pool.query(query)
        return {success:true, result}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const getAllItems = async () => {
    const sql = 'SELECT * FROM history'
    try{
        const [rows, fields] = await pool.execute(sql)
        return {success:true, rows}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const getItemById = async(id) => {
    const sql = ' SELECT * FROM ?? WHERE ?? = ?'
    const values = ['history', 'user_id', id.id]
    const query = mysql.format(sql, values)
    try{
        const [rows, fields] = await pool.query(query)
        return {success:true, rows}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const addItem = async (id, cropName, price, month, userId) => {
    const sql = 'INSERT INTO ?? SET ?'
    const values = ['history', {id:id, crop_name: cropName, price: price, month: month, user_id:userId}]
    const query = mysql.format(sql, values)
    try{
        const result = await pool.query(query)
        return {success:true, result}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
const removeItem = async (id) => {
    const sql = 'DELETE FROM ?? WHERE ?? = ?'
    const value = ['history', 'id', id.id]
    const query = mysql.format(sql, value)
    try{
        const result = await pool.query(query)
        return {success:true, result}
    }catch (error){
        console.error(error)
        return {success:false, error}
    }
}
module.exports= {
    getAll, update, remove, getAllItems, getItemById, addItem, removeItem
}