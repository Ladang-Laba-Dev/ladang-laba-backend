const router = require('express').Router()
const {register, login, search} = require('./auth/auth.handler')
const {getAllUser,updateUser, removeUser} = require('./app.handler')

router.post('/auth/login', login)
router.post('/auth/register', register)
router.post('/search', search )
router.get('/users', getAllUser)
router.post('/users/:id', updateUser)
router.delete('/users/:id', removeUser)

module.exports= router