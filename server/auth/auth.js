var router = require('express').Router();
var User = require('../api/users/user.model');
var session = require('express-session');
var passport = require('passport');


router.post('/login', function (req, res){
	User.findOne({ email: req.body.email })
	.then(function(daPerson){
		console.log(daPerson)
		req.session.userId = daPerson._id;
		res.json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).send("Error: ", err);
	});
});

router.post('/signup', function (req, res){
	
	User.create({ email: req.body.email, password: req.body.password })
	.then(function(daPerson){
		
		req.session.userId = daPerson._id; 
		res.json(daPerson);
	})
	.then(null, function (err) {
		res.status(401).json("Error: ", err, 'stack: ', err.stack);
	});
});
router.get('/logout', function (req, res){
	delete req.session.userId;
	
	res.status(200);
});

//google authentication and login 
router.get('/google', passport.authenticate('google', { scope : 'email' }));

// handle the callback after google has authenticated the user
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect : '/home',
    failureRedirect : '/'
  }));

 // don't forget to install passport-google-oauth
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
    new GoogleStrategy({
        clientID: '176698050991-ssg39debj9ajl5b17i71ql73pv0oco5n.apps.googleusercontent.com',
        clientSecret: 'Ji503AUbsLUKbnAalbWYrTtp',
        callbackURL: 'http://127.0.0.1:8080/auth/google/callback'
    },
    // google will send back the token and profile
    function (token, refreshToken, profile, done) {
        //the callback will pass back user profilie information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
        console.log('---', 'in verification callback', profile, '---');
		done();
    })
);


module.exports = router