const express = require('express')
const {authControllers,logIn} = require('../control/authControllers')
const authRoutes = express.Router();
authRoutes.post('/register',authControllers)
authRoutes.post('/login',logIn)
module.exports = authRoutes;