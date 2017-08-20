const express = require('express');
const app = express();
const db = require('./db');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitchStrategy = require('passport-twitch').Strategy;
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log('at ', accessToken);
}));

// passport.use(new TwitchStrategy());

var UserController = require('./api/controllers/UserController');

app.use('/api/v1/users', UserController);

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

app.get('/auth/google/callback', passport.authenticate('google', (err, user) => {
    if (err) {
        console.log(err);
    }
    console.log(user);
}), (req, res) => {
    console.log(res.code);
});

module.exports = app;