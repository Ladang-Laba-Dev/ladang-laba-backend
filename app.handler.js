const bcrypt = require('bcrypt')
const {getAll,update, remove} = require('./app.service')

const getAllUser = async (req, res) => {
    try{
        const result = await getAll()
        if (result.success){
            return res.status(200).json({
                success: "true",
                message: "Success in get all users",
                data: result.rows
            })
        }
    }catch (error){
        console.error(error)
        res.status(500).json({success: "false", error: "Error get all users"})
    }
}
const updateUser = async (req, res) => {
    const {username, password, email} = req.body
    const id = req.params
        try{
            const hashPass = await bcrypt.hash(password, 10)
            const result = await update(id, username, hashPass, email)
            if (result.success){
                res.status(200).json({
                    success: "true",
                    message:"User updateded successfully"
                })
            }
        }catch(error){
            console.error(error)
            res.status(500).json({success: "false", error: "Error updating user"})
        }
}
const removeUser = async (req, res) => {
    const id = req.params
    try{
        const result = await remove(id)
        if (result.success){
            res.status(200).json({
                success: "true",
                message:"User removed successfully",
                data: result.result
            })
        }
    }catch (error){
        console.error(error)
            res.status(500).json({success: "false", error: "Error removing user"})
    }
}
module.exports={
    getAllUser, updateUser, removeUser
}