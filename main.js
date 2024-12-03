require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to Ladang Laba API Homepage")
})

app.listen(port,()=>{
    console.log(`App listen on port: ${port}`)
})
