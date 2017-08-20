const passport = require('passport');
const settings = require('../../config/settings');
const authUrl = '/auth';

module.exports = (app) => {
    app.get(`${authUrl}/google`,
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));

    app.get(`${authUrl}/google/callback`, passport.authenticate('google', (err, user) => {
        if (err) {
            console.log(err);
        }
        console.log(user);
    }), (req, res) => {
        console.log(res.code);
    });

    app.get(`${authUrl}/logout`, (req, res) => {
        req.logout();
        res.send(req.user);
    });
};