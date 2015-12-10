'use strict';

app.controller('LogoutCtrl', function ($scope, AuthFactory) {

	$scope.logout = AuthFactory.logout;

	
});