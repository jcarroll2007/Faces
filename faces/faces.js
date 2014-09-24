var app = angular.module('Faces', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'Faces_Login', 'Faces_Register', 'tests']);

app.constant('URLs', {
	LOGIN: "/login",
	REGISTER: "/register",
	TESTS: "/tests"
});

app.config(['$routeProvider', 'URLs',
	function($routeProvider, URLs) {
		$routeProvider.
		when(URLs.LOGIN, {
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl'
		}).
		when(URLs.REGISTER, {
			templateUrl: 'register/register.html',
			controller: 'RegisterCtrl'
		}).
		when(URLs.TESTS, {
			templateUrl: 'tests/tests.html',
			controller: 'TestsCtrl'
		}).
		otherwise({
			redirectTo: URLs.LOGIN
		});
}]);

app.factory('routing', ['$location', function($location) {
	var routing = {};

	routing.change_view = function(url) {
		$location.path(url);
	};

	return routing;
}]);