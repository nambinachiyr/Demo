const User = require('../model/User_model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authControllers = async(req,res)=>{
    try{
        const {name,email,password} = req.body
        // console.log(name,email,password)
        const exitingUser = await User.findOne({email});
        if(exitingUser){
            res.status(400).json({message:"This user is already exist"})
        }

        else{
            const hasedPW = await bcrypt.hash(password,10)
            // console.log(hasedPW)
           const newUser = new User({
            name,
            email,
            password:hasedPW
        })
        const created = await newUser.save()
        res.json({message:"Successfully Registered!!",created})
        }
    }
    catch(err){
        res.status(500).json({message:"Eroor to get ",err:err.message})
    }
}

const logIn = async(req,res)=>{
    try{
        const {email,password} = req.body
        const existUser = await User.findOne({email})
        if(!existUser){
            res.status(404).json({message:"Invalid User"})
        }
        const validPW = await bcrypt.compare(password,existUser.password)
        console.log(validPW)
        if(!validPW){
            res.status(400).json({message:"Invalid Password"})
        }
        const jwtToken = jwt.sign({"userID":existUser._id},process.env.JWT_Secret,{expiresIn:'2h'})
        res.status(200).json({message:"Yes success Logged In !!:)",jwtToken})


    }
    catch(err){
      res.status(500).json({message:"Server Error"})
    }
}
module.exports = {
    authControllers,
    logIn
}