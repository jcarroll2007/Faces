var app = angular.module('Faces_Login', []);

app.controller('LoginCtrl', ['$scope', 'routing', 'URLs', '$http', 'user',
	function($scope, routing, URLs, $http, user) {

		$scope.user	= user.user;

		$scope.credentials = {
			uname: "",
			pass: ""
		};

//http://localhost:49517/api/Login
//http://robertryanmorris.com/services/FaceServices/api/Login
		$scope.log_in = function() {
			$http.post('http://robertryanmorris.com/services/FaceServices/api/Login', $scope.credentials)
			.success(function(received) {
				$scope.user = received;
				console.log('Login Successful:' + received);
			});
		};

		$scope.register = function() {
			routing.change_view(URLs.REGISTER);
		};
}]);