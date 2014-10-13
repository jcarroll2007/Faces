var app = angular.module('tests', []);

app.controller('TestsCtrl', ['test_web_services', '$scope', function(test_web_services, $scope) {
	$scope.test_login = function() {
		test_web_services.test_login();
	};

	$scope.test_create_new_user = function() {
		test_web_services.add_test_user();
	};
}]);


app.factory('test_web_services', ['$http', function($http) {
	var test_web_services = {};

	var new_user_info = {
		Email: "ryanmorris793@gmail.com",
		Password: "123",
		ProfilePicture: null,
		FirstName: "Jon",
		LastName: "Doe",
		Phone: "5554870000",
		DateOfBirth: "1980-01-01",
		City: "Atlanta",
		AccountType: 1,
		AboutMe: "This is my autobiography.",
		Gender: "M",
		State: "GA",
		Token: [ ],
		Friends: [ ]
	};


	var login_data = {
		uname: "ryanmorris793@gmail.com",
		pass:"123"
	};

	test_web_services.test_login = function() {
		$http.post('http://robertryanmorris.com/services/FaceServices/api/Login', login_data)
		.success(function(received) {
			alert('Login Test Successful:' + received);
		});
	};

	test_web_services.add_test_user = function() {
		$http.post('http://robertryanmorris.com/services/FaceServices/api/Users', new_user_info)
		.success(function(received) {
			alert('Add user test Successful:' + received);
		});
	};

	return test_web_services;
}]);