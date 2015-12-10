'use strict';

app.factory('AuthFactory', function ($http) {
	var Auth = {}

	// Auth.signup = function () {
	// 	console.log(req.body);
	// 	return $http.post('/api/users/', req.body)
	// 	.then(function (res) {
	// 		return new User(req.body);
	// 	});
	// };

	Auth.login = function (id) {
		console.log('login button clicked', id)

		return $http.get('/api/users/' + id)
		.then(function (res) {
			return res.data;	
		});
	};

	return Auth;
});