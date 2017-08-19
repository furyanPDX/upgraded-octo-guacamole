var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
}));

var User = require('../../models/User');

router.post('/', function (req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function (err, user) {
        if (err) {
            return res.status(500).send("HTTP/500: Create User");
        }

        res.status(200).send(user);
    });
});

router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            return res.status(500).send("HTTP/500: Get Users");
        }
        res.status(200).send(users);
    });
});

router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send("HTTP/500: Get User");
        }
        if (!user) {
            return res.status(404).send("HTTP/404: No User Found");
        }
        res.status(200).send(user);
    });
});

router.put('/:id', function (req, res) {

    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, user) {
        if (err) {
            return res.status(500).send("HTTP/500: Update User");
        }
        res.status(200).send(user);
    });
});

router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).send("HTTP/500: Delete User");
        }
        res.status(200).send("User " + user.name + " was deleted.");
    });
});

module.exports = router;