var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
}));

var User = require('../../models/User');

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send("HTTP/500: Get Users");
        }
        res.status(200).send(users);
    });
});

router.get('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, user) => {
        if (err) {
            return res.status(500).send("HTTP/500: Update User");
        }
        res.status(200).send(user);
    });
});

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send("HTTP/500: Delete User");
        }
        res.status(200).send("User " + user.name + " was deleted.");
    });
});

module.exports = router;