var app = angular.module('Faces_Search', ['ui.bootstrap', 'ngAnimate']);

app.controller('SearchCtrl', ['$scope', 'LoadingGif',  '$http', '$user',
	function($scope, LoadingGif, $http, $user) {
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
			LoadingGif.show();
			var friendship = {
				UserId: $user.user.Id,
				FriendId: user.Id
			};
			console.log(friendship);
			$http.post('http://robertryanmorris.com/services/FaceServices/api/Friends', friendship)
			.success(function() {
				$http.get('http://robertryanmorris.com/services/FaceServices/api/users' + '/' + $user.user.Id)
				.success(function(updatedUser) {
					LoadingGif.hide();
					$user.user = updatedUser;
					toastr.success('Friendship with ' + user.FirstName  + ' ' + user.LastName + ' created successfully.');
				})
				.error(function() {
					toastr.error('There was a problem connecting with the server.');
				});
				user.isFriend = true;
			})
			.error(function(data) {
				LoadingGif.hide();
				toastr.error('Friendship already exists.');
			});
		};
	}
]);