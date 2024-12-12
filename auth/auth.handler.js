const {find, insert} = require('./auth.service')
const {nanoid} = require('nanoid')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const password = req.body.password
    const username = req.body.username
    const email = req.body.email
    const isAlreadyRegister = await find(username, email)
    if (isAlreadyRegister.length===0) {
        return res.status(409).json({
            error:"Email or username already exists"
        })
    }else{
        try{
            const id = nanoid(10)
            const hashPass = await bcrypt.hash(password, 10)
            const result = await insert(id, username, hashPass, email)
            if (result.success){
                res.status(201).json({message:"User registered successfully"})
            }
        }catch(error){
            console.error(error)
            res.status(500).json({error: "Error registering user"})
        }
    }
}
const login = async (req, res) => {
    const {username, password, email} = req.body
    try{
        const savedCredential = await find(username, email)
        console.log(savedCredential)
        const savedPass = savedCredential[0].password
        const match = await bcrypt.compare(password, savedPass)
        if(match){
            res.status(200).json({
                message: "Login success"
            })
        }else{
            res.status(401).json({
                message: "Invalid credentials"
            })
        }
    }catch(error){
        console.error(error)
        res.status(500).json({error:"Error logging in"})
    }
}
module.exports={
    register, login
}