var app = angular.module('Faces', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'Faces_Login', 'Faces_Register']);

app.constant('URLs', {
	LOGIN: "/login",
	REGISTER: "/register"
});

app.config(['$routeProvider', 'URLs',
	function($routeProvider, URLs) {
		$routeProvider.
		when(URLs.LOGIN, {
			templateUrl: '/Faces/login/login.html',
			controller: 'LoginCtrl'
		}).
		when(URLs.REGISTER, {
			templateUrl: '/Faces/register/register.html',
			controller: 'RegisterCtrl'
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