const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../model/User_model');


const isAuthenticated = async(req,res,next)=>{
    // Get the token via cookies
    const token = req.cookies && req.cookies.token
    console.log(token)
    if(!token){
        res.status(401).json({message:"Not get token"})
    }
   try{
        const decoded = jwt.verify(token,process.env.JWT_Secret)
        // console.log(decoded)
        // console.log("cookies",decoded.userID)
        req.userId = decoded.userID
        next()
   }
   catch(err){
    res.status(500).json({message:"Server Error"})
   }
    
}

const allowUser = (roles)=>{
    return async(req,res,next)=>{
        // console.log("admin",req.userId)
        const user = await User.findById(req.userId)
        // console.log("user",user)
        if(!user){
           return res.status(400).json({message:"user is not found"})
        }
        if(!roles.includes(user.role)){
          return  res.status(401).json({message:"Access Denied"})
        }
        next()
    }
}


module.exports = {
    isAuthenticated,
    allowUser,
    
}