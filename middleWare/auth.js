const jwt = require('jsonwebtoken');
require('dotenv').config()

const isAuthenticated = async(req,res,next)=>{
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
    console.log(token)
    if(!token){
        res.status(401).json({message:"Not get token"})
    }
   try{
        const decoded = jwt.verify(token,process.env.JWT_Secret)
        // console.log(decoded)
        req.userId = decoded.userId
        next()
   }
   catch(err){
    res.status(500).json({message:"Server Error"})
   }
    
}
module.exports = isAuthenticated