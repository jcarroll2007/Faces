var app = angular.module('Faces_Search', ['ui.bootstrap', 'ngAnimate']);

app.controller('SearchCtrl', ['$scope',  '$rootScope', '$http',
	function($scope, $rootScope, $http) {
		$rootScope.$on('Search', function(obj, searchParameter) {
			console.log(searchParameter);
		});
		$scope.users = [];
		$scope.updateUsers = function() {
			$http.get('http://robertryanmorris.com/services/FaceServices/api/users').success(function(users) {
				$scope.users = users;
				console.log(users);
			});
		}();
		//  url for getting all users: http://robertryanmorris.com/services/FaceServices/api/user

	}
]);