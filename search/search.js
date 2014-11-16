var app = angular.module('Faces_Search', ['ui.bootstrap', 'ngAnimate']);

app.controller('SearchCtrl', ['$scope',  '$rootScope', '$http', '$user',
	function($scope, $rootScope, $http, $user) {
		$scope.$on('Search', function(obj, searchParameter) {
			$scope.searchText = searchParameter;
			console.log(searchParameter);
		});
		$scope.users = [];
		$scope.updateUsers = function() {
			$http.get('http://robertryanmorris.com/services/FaceServices/api/users').success(function(users) {
				$scope.users = users;
				console.log(users);
			});
		}();
		$scope.searchText = function() {
			return "";
		};

		$scope.isCurrentUser = function(user) {
			return (user.Email === $user.user.Email);
		};

		$scope.addFriend = function(user) {
			var friendship = {
				UserId: $user.user.Id,
				FriendId: user.Id
			};	
			console.log(friendship);
			$http.post('http://robertryanmorris.com/services/FaceServices/api/Friends', friendship)
			.success(function() {
				user.isFriend = true;
				console.log(user);
				toastr.error('Are you the six fingered man?');
			});
		};
	}
]);