var app = angular.module('Faces', ['ngRoute', 'Faces_Home', 'Faces_Register']);

app.constant('URLs', {
	HOME: "/home",
	REGISTER: "/register"
});

app.config(['$routeProvider', 'URLs',
	function($routeProvider, URLs) {
		$routeProvider.
		when(URLs.HOME, {
			templateUrl: '/home/home.html',
			controller: 'HomeCtrl'
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