'use strict';

app.factory('AuthFactory', function ($http) {
	var Auth = {}

	Auth.login = function (email) {
		console.log('login button clicked', email)		
		return $http({
			method: 'POST',
			url: '/auth/login',
			data: { email: email }
		})
		.then(function(data){
			console.log("login data here: ", data);
		});
	};

	Auth.signup = function (email, password) {
		console.log('signup button clicked', email, password)
		return $http({
			method: 'POST', 
			url: '/auth/signup/',
			data: { email: email, password: password }
		})
		.then(function(data){
			console.log("signup data here: ", data);
		});
	}

	return Auth;
});