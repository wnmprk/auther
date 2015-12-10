'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory) {

	$scope.login = AuthFactory.login;

	
});