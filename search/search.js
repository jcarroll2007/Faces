var app = angular.module('Faces_Search', ['ui.bootstrap', 'ngAnimate']);

app.controller('SearchCtrl', ['$scope', 'LoadingGif',  '$http', '$user', 'users', 'SearchParameter', '$filter',
	function($scope, LoadingGif, $http, $user, users, SearchParameter, $filter) {
		$scope.users = users.getAll();

		$scope.searchText = function() {
			return "";
		};
		console.log($scope.searchText());
		$scope.searchText = SearchParameter.text;
		console.log($scope.searchText);

		$scope.isCurrentUser = function(user) {
			return (user.Email === $user.user.Email);
		};

		$scope.isFriend = function(friend) {
			// if friend in $user.user.Friends
			if (($filter('filter')($user.user.Friends, {Email: friend.Email})).length === 1)
			{
				console.log('isFriend');
				console.log(friend.Email);
				return true;
			}
			return false;
		};

		$scope.$watch(function() {
			return SearchParameter.text;
		}, function(oldVal, newVal) {
			$scope.searchText = searchParameter.text;
		}, true);

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

app.service('SearchParameter', function() {
	searchParameter = {};
	searchParameter.text = "";
	return searchParameter;
});

app.service('users', function($http) {
	usersService = {};

	usersService.updatedUsers = function() {
		return $http.get('http://robertryanmorris.com/services/FaceServices/api/users');
	};

	usersService.updatedUsers()
	.success(function(response) {
		usersService.users = response;
		console.log(response);
	});

	usersService.getAll = function() {
		return usersService.users;
	};

	return usersService;
});