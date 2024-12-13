const {find, insert} = require('./auth.service')
const {nanoid} = require('nanoid')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const {username, password, email} = req.body
    const isAlreadyRegister = await find(username, email)
    if (isAlreadyRegister.length>0) {
        return res.status(409).json({
            success: false,
            error:"Email or username already exists"
        })
    }else{
        try{
            const id = nanoid(10)
            const hashPass = await bcrypt.hash(password, 10)
            const result = await insert(id, username, hashPass, email)
            if (result.success){
                res.status(201).json({success: true, message:"User registered successfully"})
            }
        }catch(error){
            console.error(error)
            res.status(500).json({success: false, error: "Error registering user"})
        }
    }
}
const login = async (req, res) => {
    const {username, password, email} = req.body
    try{
        const savedCredential = await find(username, email)
        const savedPass = savedCredential[0].password
        const match = await bcrypt.compare(password, savedPass)
        if(match){
            res.status(200).json({
                success: true,
                message: "Login success"
            })
        }else{
            res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }
    }catch(error){
        console.error(error)
        res.status(500).json({success: false, error:"Error logging in"})
    }
}

module.exports={
    register, login
}