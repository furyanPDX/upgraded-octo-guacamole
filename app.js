const express = require('express');
require('./services/passport');
const app = express();
const db = require('./db');

var UserController = require('./api/controllers/UserController');

app.use('/api/v1/users', UserController);

require('./routes/authRoutes')(app);

module.exports = app;