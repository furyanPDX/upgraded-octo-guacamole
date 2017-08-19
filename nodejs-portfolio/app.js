var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./api/controllers/UserController');

app.use('/api/v1/users', UserController);

module.exports = app;