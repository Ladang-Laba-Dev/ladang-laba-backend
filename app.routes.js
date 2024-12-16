const router = require('express').Router()
const {register, login} = require('./auth/auth.handler')
const {search, getAllUser, updateUser, removeUser, getAllHistory, getHistory, addHistory, removeHistory} = require('./app.handler')

router.post('/auth/login', login)
router.post('/auth/register', register)
router.post('/search', search )
router.get('/users', getAllUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', removeUser)
router.get('/history', getAllHistory)
router.get('/history/:id', getHistory)
router.post('/history', addHistory)
router.delete('/history/:id', removeHistory)

module.exports= router