const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitchStrategy = require('passport-twitch').Strategy;
const settings = require('../config/settings');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: settings.googleClientID,
    clientSecret: settings.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
    }).then((existingUser) => {
        if (existingUser) {
            done(null, existingUser);
        } else {
            new User({
                    googleId: profile.id,
                    name: 'Test',
                    email: 'test'
                }).save()
                .then(user => done(null, user));
        }
    });

}));

// passport.use(new TwitchStrategy());