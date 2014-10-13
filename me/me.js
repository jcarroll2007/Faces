var app = angular.module('Faces_Me', []);

app.controller('MeCtrl' , ['$scope', 'user',
	function($scope, user) {
		$scope.user = user;
}]);