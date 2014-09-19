var app = angular.module('Faces', ['ngRoute', 'Faces_Login', 'Faces_Register']);

app.constant('URLs', {
	LOGIN: "/login",
	REGISTER: "/register"
});

app.config(['$routeProvider', 'URLs',
	function($routeProvider, URLs) {
		$routeProvider.
		when(URLs.LOGIN, {
			templateUrl: '/login/login.html',
			controller: 'LoginCtrl'
		}).
		when(URLs.REGISTER, {
			templateUrl: '/register/register.html',
			controller: 'RegisterCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);

app.factory('routing', ['$location', function($location) {
	var routing = {};

	routing.change_view = function(url) {
		$location.path(url);
	};

	return routing;
}]);