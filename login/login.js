var app = angular.module('Faces_Login', []);

app.controller('LoginCtrl', ['$scope', 'routing', 'URLs', '$http',
	function($scope, routing, URLs, $http) {

		$scope.credentials = {
			uname: "",
			pass: ""
		};

		$scope.log_in = function() {
			$http.post('http://robertryanmorris.com/services/FaceServices/api/Login', $scope.credentials)
			.success(function(received) {
				console.log('Login Successful:' + received);
			});
		};

		$scope.register = function() {
			routing.change_view(URLs.REGISTER);
		};
}]);