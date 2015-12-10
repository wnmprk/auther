'use strict';

app.factory('AuthFactory', function ($http) {
	var Auth = {}

	Auth.signup = function (email, password) {

		// console.log(req.body);
		return $http({
			method: 'POST', 
			url: '/api/signup/',
			data: {email: email, password:password}
		});
	}

	Auth.login = function (email, password) {
		console.log('login button clicked', email, password)

		
		return $http({
			method: 'POST',
			url: '/auth/login',
			data: {email:email}
		})
		.then(function(result){
			console.log(result, "result");
		})

	};

	return Auth;
});