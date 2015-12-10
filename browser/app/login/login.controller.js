'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory) {
	console.log($scope);

	// $scope.user = {
	// 	name:
	// 	email:
	// }

	$scope.login = AuthFactory.login;
	
});