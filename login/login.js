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

		$scope.test_ajax = function() {
			data = {
				Email: "ryanmorris793@gmail.com",
				Password: "123",
				ProfilePicture: null,
				FirstName: "robert",
				LastName: "morris",
				Phone: "6784474564",
				DateOfBirth: "1984-04-04",
				City: "Grayson",
				AccountType: 1,
				AboutMe: "About me section data",
				Gender: "M",
				State: "GA",
				Friends: [ ]
			};
			login_data = {
				uname: "ryanmorris793@gmail.com",
				pass:"123"
			};
			$http.get('http://robertryanmorris.com/services/FaceServices/api/Login?uname&pass', login_data)
			.success(function(received) {
				alert('success' + received);
			});
		};
}]);