const mongoose = require('mongoose');
const settings = require('../../config/settings');
const apiUrl = settings.apiUrl + '/users';

const User = mongoose.model('users');

module.exports = (app) => {
    app.post(`${apiUrl}/`, (req, res) => {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, (err, user) => {
            if (err) {
                return res.status(500).send("HTTP/500: Create User");
            }

            res.status(200).send(user);
        });
    });

    app.get(`${apiUrl}/`, (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                return res.status(500).send("HTTP/500: Get Users");
            }
            res.status(200).send(users);
        });
    });

    app.get(`${apiUrl}/:id`, (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                return res.status(500).send("HTTP/500: Get User");
            }
            if (!user) {
                return res.status(404).send("HTTP/404: No User Found");
            }
            res.status(200).send(user);
        });
    });

    app.put(`${apiUrl}/:id`, (req, res) => {

        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, (err, user) => {
            if (err) {
                return res.status(500).send("HTTP/500: Update User");
            }
            res.status(200).send(user);
        });
    });

    app.delete(`${apiUrl}/:id`, (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) {
                return res.status(500).send("HTTP/500: Delete User");
            }
            res.status(200).send("User " + user.name + " was deleted.");
        });
    });
};