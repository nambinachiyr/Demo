const express = require('express')
const {authControllers,logIn,Me, logout} = require('../control/authControllers');
const { isAuthenticated } = require('../middleWare/auth');

const authRoutes = express.Router();
authRoutes.post('/register',authControllers)
authRoutes.post('/login',logIn)
authRoutes.post('/logout',isAuthenticated,logout)

// For the purpose of which user is logged In
authRoutes.get('/me',isAuthenticated,Me)
module.exports = authRoutes;