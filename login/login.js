var app = angular.module('Faces_Login', []);

app.controller('LoginCtrl', ['$scope', 'routing', 'URLs', '$http', '$user',
	function($scope, routing, URLs, $http, $user) {

		$scope.user	= $user.user;

		$scope.credentials = {
			uname: "",
			pass: ""
		};
		$scope.loading = false;

//http://localhost:49517/api/Login
//http://robertryanmorris.com/services/FaceServices/api/Login
		$scope.log_in = function() {
			$scope.loading = true;
			$http.post('http://robertryanmorris.com/services/FaceServices/api/Login', $scope.credentials)
			.success(function(user) {
				$user.user = user;
				console.log('Login Successful:' + user);
				routing.change_view(URLs.ME);
				$scope.loading = false;
			})
			.error(function() {
				$scope.loading = false;
				toastr.error('Incorrect password or email.');
			});
		};

		$scope.register = function() {
			routing.change_view(URLs.REGISTER);
		};
}]);