var app = angular.module('Faces_Login', []);

app.controller('LoginCtrl', ['$scope', 'LoadingGif', 'routing', 'URLs', '$http', '$user', 'hashpass',
	function($scope, LoadingGif, routing, URLs, $http, $user, hashpass) {

		$scope.user	= $user.user;

		$scope.credentials = {
			uname: "",
			pass: ""
		};
		$scope.loading = false;

//http://localhost:49517/api/Login
//http://robertryanmorris.com/services/FaceServices/api/Login
		$scope.log_in = function() {
			LoadingGif.show();
			$scope.credentials.pass = hashpass.encode($scope.credentials.pass);
			$http.post('http://robertryanmorris.com/services/FaceServices/api/Login', $scope.credentials)
			.success(function(user) {
				$user.user = user;
				console.log('Login Successful:' + user);
				routing.change_view(URLs.ME);
				LoadingGif.hide();
			})
			.error(function() {
				LoadingGif.hide();
				toastr.error('Incorrect password or email.');
			});
		};

		$scope.register = function() {
			routing.change_view(URLs.REGISTER);
		};


}]);