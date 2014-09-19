var app = angular.module('Faces_Home', []);

app.controller('HomeCtrl', ['$scope', 'routing', 'URLs',
	function($scope, routing, URLs) {

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