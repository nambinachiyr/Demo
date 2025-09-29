const express = require('express');
const router = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use('/', router);
app.use('/auth',authRoutes)
module.exports = app;
