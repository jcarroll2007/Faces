var app = angular.module('Faces_Friend', ['ui.bootstrap', 'ngAnimate'])

.controller('FriendCtrl', function($scope, FriendView, $http, $user, $modal, WallPostService) {
	$scope.friend = FriendView.friend;
	console.log($scope.friend);

	$scope.createNewPost = function (size) {
		var modalInstance = $modal.open({
			templateUrl: 'post/newPost.html',
			controller: 'newModalCtrl',
			size: size,
		});

		modalInstance.result.then(function (newPostContent) {
			console.log(newPostContent);
			var post = {
				UserId: $scope.friend.Id,
				Message: newPostContent,
				Picture: "",
				PostTime: new Date(),
				PosterId: $user.user.Id
			};
			WallPostService.post(post).success(function(response) {
				WallPostService.getAll($scope.friend.Id).success(function(data) {
					$scope.friend.Post = data;
					toastr.success("Wall post created succesfully.");
				});
			});
		});
	}; //end createNewPost

	$scope.addComment = function(post) {
		var newComment = {
			CommentText: post.commentText,
			CommentDatetime: new Date(),
			UserId: $user.user.Id,
			WallId: post.Id
		};
		$http.post('http://robertryanmorris.com/services/FaceServices/api/Comments', newComment)
		.success(function(response) {
			console.log(response);
			newComment.UserFirstName = $user.user.FirstName;
			newComment.UserLastName = $user.user.LastName;
			post.Comments.push(newComment);
			post.commentText = "";
		})
		.error(function() {
			toastr.error('There was a problem communicating witht the server.');
		});
	};
})

.service('FriendView', function(routing, URLs, $rootScope, LoadingGif, $http) {
	friendView = {};

	friendView.show = function(user) {
		LoadingGif.show();
		$http.get('http://robertryanmorris.com/services/FaceServices/api/users' + '/' + user.Id)
				.success(function(updatedUser) {
					LoadingGif.hide();
					friendView.friend = updatedUser;
					routing.change_view(URLs.FRIEND);
				})
				.error(function() {
					LoadingGif.hide();
					toastr.error('There was a problem connecting with the server.');
				});
	};

	return friendView;
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

