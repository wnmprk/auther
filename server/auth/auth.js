var router = require('express').Router();
var User = require('../api/users/user.model');
var session = require('express-session');

router.use(function (req, res, next) {
    User.findOne({ email: req.body.email })
	.then(function(daPerson){
		req.session.UserId = daPerson._id;
		res.status(200).json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).send("Error: ", err);
	});
});

router.post('/login', function (req, res){
	User.findOne({ email: req.body.email })
	.then(function(daPerson){
		res.status(200).json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).send("Error: ", err);
	});
});

router.post('/signup', function (req, res){
	User.create({ email: req.body.email, password: req.body.password })
	.then(function(daPerson){
		res.status(200).json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).send("Error: ", err);
	});
});

module.exports = router