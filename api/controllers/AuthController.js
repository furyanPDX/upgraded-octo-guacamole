const passport = require('passport');
module.exports = (app) => {
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
};