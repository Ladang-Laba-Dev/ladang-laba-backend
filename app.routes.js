const router = require('express').Router()
const {register, login} = require('./auth/auth.handler')
const {search, getAllUser,updateUser, removeUser} = require('./app.handler')

router.post('/auth/login', login)
router.post('/auth/register', register)
router.post('/search', search )
router.get('/users', getAllUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', removeUser)

module.exports= router