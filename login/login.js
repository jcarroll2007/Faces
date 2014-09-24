var app = angular.module('Faces_Login', []);

app.controller('LoginCtrl', ['$scope', 'routing', 'URLs', '$http',
	function($scope, routing, URLs, $http) {

		$scope.credentials = {
			username: "",
			password: ""
		};

		$scope.log_in = function() {
			alert('You really want to sign in? Too bad.. haven\'t implemented that yet.');
		};

		$scope.register = function() {
			routing.change_view(URLs.REGISTER);
		};
}]);