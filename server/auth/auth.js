var router = require('express').Router();
var User = require('../api/users/user.model');

router.post('/login', function(req,res,next){
	User.findOne({email:req.body.email})
	.then(function(daPerson){
		res.status(200).json(daPerson);
	})
	
})
module.exports = router