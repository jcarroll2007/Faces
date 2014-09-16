var app = angular.module('FacesHome', []);

app.directive('testDir', [function() {
	return {
		template: '<div>TEST</div>'
	};
}]);

app.controller('HomeCtrl', ['$scope',
	function($scope) {
		$scope.welcome_message = "JORDAN CARROLL - Welcome to your profile.";
}]);