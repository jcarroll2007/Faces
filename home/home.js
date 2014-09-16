var app = angular.module('FacesHome', []);

app.controller('HomeCtrl', ['$scope',
	function($scope) {
		$scope.welcome_message = "JORDAN CARROLL - Welcome to your profile.";

		$scope.username = "";

		$scope.sign_in = function() {
			alert('You really want to sign in? Too bad.. haven\'t implemented that yet.');
		};
}]);