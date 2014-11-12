var app = angular.module('Faces_Me', ['ui.bootstrap', 'ngAnimate']);

app.controller('MeCtrl' , [
	'$scope', '$window', '$user', 'post', '$modal', 'WallPostService',
	function($scope, $window, $user, post, $modal, WallPostService) {
	$scope.user = $user.user;
	$scope.posts = [];

	$scope.createNewPost = function (size) {
		var modalInstance = $modal.open({
			templateUrl: 'post/newPost.html',
			controller: 'newPostModalCtrl',
			size: size,
		});

		modalInstance.result.then(function (newPostContent) {
			console.log(newPostContent);
			var post = {
				UserId: $scope.user.Id,
				Message: newPostContent,
				Picture: "",
				PostTime: new Date(),
				PosterId: 1
			};
			WallPostService.post(post).success(function(response) {
				console.log(response);
			});
			WallPostService.getAll($scope.user.Id).success(function(data) {
				$scope.posts = data;
			});
		});
	};

	$scope.postNewPicture = function(size) {
		var modalInstance = $modal.open({
			templateUrl: 'picturePost/picturePost.html',
			controller: 'newPictureModalCtrl',
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

app.controller('newPostModalCtrl', function($scope, $modalInstance) {
	$scope.post = {};

	$scope.ok = function () {
		console.log($scope);
		$modalInstance.close($scope.post.content);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});

app.controller('newPictureModalCtrl', function($scope, $modalInstance) {
	$scope.newPicture = "";

	$scope.ok = function () {
		console.log($scope);
		$modalInstance.close($scope.post.content);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});