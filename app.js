const express = require('express');
const app = express();
require('./models/User');
require('./services/passport');
const db = require('./db');

module.exports = app;