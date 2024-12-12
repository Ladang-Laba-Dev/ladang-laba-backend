const router = require('express').Router()
const {register, login, search} = require('./auth/auth.handler')

router.post('/login', login)
router.post('/register', register)
router.post('/search', search )

module.exports= router