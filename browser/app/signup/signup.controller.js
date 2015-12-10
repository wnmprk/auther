'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory) {
	AuthFactory.signup()
	.then(function () {
		console.log('this is the signup')
	});
});