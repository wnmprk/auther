var router = require('express').Router();
var User = require('../api/users/user.model');
var session = require('express-session');


router.post('/login', function (req, res){
	User.findOne({ email: req.body.email })
	.then(function(daPerson){
		console.log('req session: ', req.session)
		req.session.userId = daPerson._id;
		res.json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).send("Error: ", err);
	});
});

router.post('/signup', function (req, res){
	console.log('req body: ', req.body)
	User.create({ email: req.body.email, password: req.body.password })
	.then(function(daPerson){
		console.log('da: ', daPerson)
		req.session.userId = daPerson._id; 
		res.json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).json("Error: ", err, 'stack: ', err.stack);
	});
});
router.get('/logout', function (req, res){
	delete req.session.userId;
	console.log('you done logged out!')
	res.status(200);
});

module.exports = router