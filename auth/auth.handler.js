const bcrypt = require('bcrypt')
const {find, insert, update, remove} = require('./auth.service')

const register = async (req, res) => {
    const {username, password, email} = req.body
    const isAlreadyRegister = await find(username, email)
}