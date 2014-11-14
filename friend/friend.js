var app = angular.module('Faces_friendPage', ['ui.bootstrap', 'ngAnimate']);

app.controller('FriendsCtrl', ['$scope', '$user'
	function($scope, $user) {

		var $scope.friend = $user.user;

		

	}]);