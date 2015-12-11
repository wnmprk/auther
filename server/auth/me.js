var router = require('express').Router();
var User = require('../api/users/user.model');
var session = require('express-session');

router.get('/', function(req,res){
	User.findOne({_id: req.body.userId})
})
module.exports = router;