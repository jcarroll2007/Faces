var app = angular.module('Faces_Me', []);

app.controller('MeCtrl' , ['$scope', 'user', 'post',
	function($scope, user, post) {
		$scope.user = user;

		$scope.posts = [];

		$scope.testComments = [];

		$scope.testPost = new post(user, '', 'This is my wall post', $scope.testComments);

		$scope.posts.push($scope.testPost);

		$scope.addPosts = function(posts) {
			$scope.posts.concat(posts);
		};
}]);