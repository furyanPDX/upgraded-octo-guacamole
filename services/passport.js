const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitchStrategy = require('passport-twitch').Strategy;
const settings = require('../config/settings');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: settings.googleClientID,
    clientSecret: settings.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, cb) => {
    new User({
        googleId: profile.id,
        name: 'Test',
        email: 'test'
    }).save();
}));

// passport.use(new TwitchStrategy());