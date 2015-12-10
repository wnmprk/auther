'use strict';

app.controller('SignupCtrl', function ($scope, AuthFactory) {
	
	$scope.signup = AuthFactory.signup;

	$scope.getCurrentUser = AuthFactory.getCurrentUser;

});