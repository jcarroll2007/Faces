var app = angular.module('Faces_Me', ['ui.bootstrap', 'ngAnimate']);

app.controller('MeCtrl' , ['$scope', '$window', 'user', 'post',
	function($scope, $window, user, post) {
		
		$scope.user = user.user;

		$scope.posts = [];

		$scope.testComments = [];

		//$scope.testPost = new post(user, '', 'This is my wall post', $scope.testComments);

		//$scope.posts.push($scope.testPost);

		$scope.addPosts = function(posts) {
			$scope.posts.concat(posts);
		};

		var revealPostBox = false;
		var revealPictureBox = false;

		$scope.postBoxState = function(){
			$scope.revealPostBox = !$scope.revealPostBox;
			$scope.revealPictureBox = false;
		}

		$scope.pictureBoxState = function(){
			$scope.revealPictureBox = !$scope.revealPictureBox;
			$scope.revealPostBox = false;
		}

		$scope.newPost = function(){

		}
}]);