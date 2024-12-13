require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000

app.use(express.json()) //built-in middleware from Express to populate body request

//import router
const router = require('./app.routes')

//use the middleware
app.use(router)

app.get('/', (req, res) => {
    res.send("Welcome to Ladang Laba API Homepage. For API documentation please refer to: https://documenter.getpostman.com/view/32762069/2sAYHxnPZb")
})

app.listen(port,()=>{
    console.log(`App listen on port: ${port}`)
})
