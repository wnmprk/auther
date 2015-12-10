'use strict';

app.factory('AuthFactory', function ($http, $state) {
	var Auth = {}
	var currentUser;

	Auth.login = function (email) {
		console.log('login button clicked', email)		
		return $http({
			method: 'POST',
			url: '/auth/login',
			data: { email: email }
		})
		.then(function (data){
			currentUser = data.data;
			$state.go('home')
		});
	};

	Auth.signup = function (email, password) {
		console.log('signup button clicked', email, password)
		return $http({
			method: 'POST', 
			url: '/auth/signup/',
			data: { email: email, password: password }
		})
		.then(function (data){
			console.log("signup data here: ", data);
		})
		.then(null, function (e){
			console.log('e: ', e)
		});
	}

	Auth.logout = function () {
		console.log('logout button clicked');
		return $http({
			method: 'GET', 
			url: '/auth/logout/'
		})
		.then(function (data) {
			currentUser = null;
		})
		.then(null, function (e){
			console.log('e: ', e)
		});
	}

	Auth.getCurrentUser = function () {
		return currentUser;
	}

	return Auth;
});