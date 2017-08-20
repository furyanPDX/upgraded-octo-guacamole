const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitchStrategy = require('passport-twitch').Strategy;
const settings = require('../config/settings');

passport.use(new GoogleStrategy({
    clientID: settings.googleClientID,
    clientSecret: settings.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, cb) => {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);
}));

// passport.use(new TwitchStrategy());
