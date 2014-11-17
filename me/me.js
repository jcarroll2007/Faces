var app = angular.module('Faces_Me', ['ui.bootstrap', 'ngAnimate']);

app.controller('MeCtrl' , [
	'$scope', '$window', '$user', 'post', '$modal', 'WallPostService', 'FriendView',
	function($scope, $window, $user, post, $modal, WallPostService, FriendView) {
	$scope.user = $user.user;
	$scope.posts = $user.user.Post;
	$scope.friends = $user.user.Friends;

	$scope.createNewPost = function (size) {
		var modalInstance = $modal.open({
			templateUrl: 'post/newPost.html',
			controller: 'newModalCtrl',
			size: size,
		});

		modalInstance.result.then(function (newPostContent) {
			console.log(newPostContent);
			var post = {
				UserId: $scope.user.Id,
				Message: newPostContent,
				Picture: "",
				PostTime: new Date(),
				PosterId: $scope.user.Id
			};
			WallPostService.post(post).success(function(response) {
				WallPostService.getAll($scope.user.Id).success(function(data) {
					$scope.posts = data;
					toastr.success("Wall post created succesfully.");
				});
			});
		});
	}; //end createNewPost

	$scope.postNewPicture = function(size) {
		var modalInstance = $modal.open({
			templateUrl: 'picturePost/picturePost.html',
			controller: 'newModalCtrl',
			size: size,
		});

		modalInstance.result.then(function (newPictureContent) {
			//console.log(newPostContent);
			var newPicture = newPictureContent;
			$scope.posts.push(newPicture);
			WallPostService.post(newPicture).success(function(response) {
				console.log(response);
			});
		});
	}; //end postNewPicture


	$scope.addComment = function(post) {
		console.log(post);
	};

	$scope.viewFriend = function(user) {
		FriendView.show(user);
	};

	/********
	editor control variables
	*********/
	$scope.fromEditOn = false;
	$scope.phoneEditOn = false;
	$scope.birthdayEditOn = false;
	$scope.aboutEditOn = false;
	///////

	$scope.fromEditor = function(){
		$scope.fromEditOn = !$scope.fromEditOn;
	};

	$scope.phoneEditor = function(){
		$scope.phoneEditOn = !$scope.phoneEditOn;
	};

	$scope.birthdayEditor = function(){
		$scope.birthdayEditOn = !$scope.birthdayEditOn;
	};

	$scope.aboutEditor = function(){
		$scope.aboutEditOn = !$scope.aboutEditOn;
	};

	$scope.pictureEditor = function(){

	};
}]);

app.service('WallPostService', function($http) {
	this.post = function(post) {
		return $http.post('http://robertryanmorris.com/services/FaceServices/api/walls', post);
	};

	this.getAll = function(userId) {
		return $http.get('http://robertryanmorris.com/services/FaceServices/api/walls' + '/' + userId);
	};
});

app.controller('newModalCtrl', function($scope, $modalInstance) {
	$scope.post = {};

	$scope.ok = function () {
		console.log($scope);
		$modalInstance.close($scope.post.content);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});