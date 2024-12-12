const router = require('express').Router()
const {register, login} = require('./auth/auth.handler')

router.post('/login', login)
router.post('/register', register)

module.exports= router