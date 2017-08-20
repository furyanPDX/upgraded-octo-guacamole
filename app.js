const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
const settings = require('./config/settings');
const db = require('./db');

require('./models/User');
require('./services/passport');

var Raven = require('raven');
Raven.config(settings.ravenUrl).install();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [settings.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./api/controllers/UserController')(app);
require('./api/controllers/AuthController')(app);
module.exports = app;