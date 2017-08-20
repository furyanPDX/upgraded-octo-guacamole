const passport = require('passport');
const settings = require('../../config/settings');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send("hello");
    });
};