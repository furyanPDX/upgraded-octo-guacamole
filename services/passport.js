const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitchStrategy = require('passport-twitch').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, cb) => {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);
}));

// passport.use(new TwitchStrategy());
