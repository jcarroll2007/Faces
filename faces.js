var app = angular.module('Faces', ['ngRoute', 'FacesHome']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: '/home/home.html',
			controller: 'HomeCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);